import { useEffect, useRef, useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { LicensePlateInput } from "../../components/LicensePlateInput";
import { TextAreaInput } from "../../components/TextAreaInput";
import { Container, Content, Message, MessageContent } from "./styles";
import { TextInput, ScrollView, Alert } from "react-native";
import { licensePlateValidate } from "../../utils/licensePlateValidate";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  useForegroundPermissions,
  watchPositionAsync,
  LocationAccuracy,
  LocationSubscription,
  LocationObjectCoords,
  requestBackgroundPermissionsAsync,
} from "expo-location";
import { getAddressLocation } from "../../utils/getAddressLocation";
import { Loading } from "../../components/Loading";
import { LocationInfo } from "../../components/LocationInfo";
import { Car } from "phosphor-react-native";
import { Map } from "../../components/Map";
import { startLocationTask } from "../../tasks/backgroundLocationTask";
import { openSettings } from "../../utils/openSettings";
import { registerDeparture } from "../../services/departureService"; // Importa a função de serviço

export function Departure() {
  const descriptionRef = useRef<TextInput>(null);
  const licensePlateRef = useRef<TextInput>(null);
  const [description, setDescription] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const user = useUser();
  const { goBack } = useNavigation();
  const [locationForegroundPermission, requestLocationForegroundPermission] =
    useForegroundPermissions();
  const [isLoadingLocation, setIsLoadingLocation] = useState(true);
  const [currentAddress, setCurrentAddress] = useState<string | null>(null);
  const [currentCoords, setCurrentCoords] =
    useState<LocationObjectCoords | null>(null);

  async function handleDepartureRegister() {
    try {
      if (!licensePlateValidate(licensePlate)) {
        licensePlateRef.current?.focus();
        return Alert.alert(
          "Placa inválida",
          "A placa do veículo é inválida. Por favor, informe a placa correta do veículo."
        );
      }

      if (description.trim().length === 0) {
        descriptionRef.current?.focus();
        return Alert.alert(
          "Finalidade",
          "Por favor, informe a finalidade da utilização do veículo."
        );
      }

      if (!currentCoords?.latitude || !currentCoords?.longitude) {
        return Alert.alert(
          "Localização",
          "Não foi possível obter a localização atual. Tente novamente!"
        );
      }

      setIsRegistering(true);

      const backgroundPermissions = await requestBackgroundPermissionsAsync();

      if (!backgroundPermissions.granted) {
        setIsRegistering(false);

        return Alert.alert(
          "Localização",
          'É necessário permitir que o App tenha acesso a localização em segundo plano. Acesse as configurações do dispositivo e habilite "Permitir o tempo todo".',
          [{ text: "Abrir configurações", onPress: openSettings }]
        );
      }

      await startLocationTask();

      // Use a função de serviço para registrar a partida
      await registerDeparture({
        user_id: user!.id,
        license_plate: licensePlate.toUpperCase(),
        description,
        coords: [
          {
            latitude: currentCoords.latitude,
            longitude: currentCoords.longitude,
            timestamp: new Date().getTime(),
          },
        ],
      });

      Alert.alert("Saída", "Saída do veículo registrada com sucesso!");
      goBack();
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível registrar a saída do veículo.");
      setIsRegistering(false);
    }
  }

  useEffect(() => {
    requestLocationForegroundPermission();
  }, []);

  useEffect(() => {
    if (!locationForegroundPermission?.granted) {
      return;
    }

    let subscription: LocationSubscription;
    watchPositionAsync(
      {
        accuracy: LocationAccuracy.High,
        timeInterval: 1000,
      },
      (location) => {
        setCurrentCoords(location.coords);
        getAddressLocation(location.coords)
          .then((address) => {
            if (address) {
              setCurrentAddress(address);
            }
          })
          .finally(() => setIsLoadingLocation(false));
      }
    ).then((response) => (subscription = response));

    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, [locationForegroundPermission]);

  if (!locationForegroundPermission?.granted) {
    return (
      <Container>
        <Header title="Saída" />
        <MessageContent>
          <Message>
            Você precisa permitir que o aplicativo tenha acesso a localização
            para utilizar essa funcionalidade. Por favor, acesse as
            configurações do seu dispositivo para conceder essa permissão do
            aplicativo.{" "}
          </Message>
          <Button title="Abrir Configurações" onPress={openSettings} />
        </MessageContent>
      </Container>
    );
  }

  if (isLoadingLocation) {
    return <Loading />;
  }

  return (
    <Container>
      <Header title="Saída" />
      <KeyboardAwareScrollView extraHeight={100}>
        <ScrollView>
          {currentCoords && <Map coordinates={[currentCoords]} />}
          <Content>
            {currentAddress && (
              <LocationInfo
                icon={Car}
                label="Localização atual"
                description={currentAddress}
              />
            )}
            <LicensePlateInput
              ref={licensePlateRef}
              label="Placa do veículo"
              placeholder="BRA1234"
              onSubmitEditing={() => descriptionRef.current?.focus()}
              returnKeyType="next"
              onChangeText={setLicensePlate}
            />
            <TextAreaInput
              ref={descriptionRef}
              label="Finalidade"
              placeholder="Vou utilizar o veículo para..."
              onSubmitEditing={handleDepartureRegister}
              returnKeyType="send"
              blurOnSubmit
              onChangeText={setDescription}
            />
            <Button
              title="Registrar Saída"
              onPress={handleDepartureRegister}
              isLoading={isRegistering}
            />
          </Content>
        </ScrollView>
      </KeyboardAwareScrollView>
    </Container>
  );
}

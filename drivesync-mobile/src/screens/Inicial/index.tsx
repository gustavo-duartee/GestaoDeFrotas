import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SignIn from '../../assets/SignIn2.png';

const OnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={SignIn} style={styles.background} resizeMode="cover">
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.title}>Controle sua rotina de viagens com o DriveSync</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end', // Alinha o conteúdo na parte inferior
    alignItems: 'flex-start',
  },
  content: {
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingBottom: 50, // Ajuste de espaçamento do botão na parte inferior
  },
  title: {
    color: '#000',
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 15,
    textAlign: 'left',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 10,
    width: '100%', // Adiciona esta linha para fazer o botão ocupar a largura da tela
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center', // Centraliza o texto dentro do botão
  },
});

export default OnboardingScreen;

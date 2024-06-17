import React, { useState } from "react";
import { View, Button, StyleSheet, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { useAuth } from "../../contexts/auth";
import { Ionicons } from '@expo/vector-icons';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleSign() {
    if (!email || !senha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    try {
      await signIn(email, senha);
    } catch (error) {
      Alert.alert("Erro", "O login falhou. Por favor, tente novamente.");
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.circle}>
        <Ionicons name="person" size={40} color="gray" />
        {/*<Text style={styles.initials}>{getUserInitials(user?.name || '')}</Text>*/}
      </View>

      <Text style={styles.text}>Bem vindo(a)!</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <TouchableOpacity style={styles.button} onPress={handleSign}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#202024",
    paddingHorizontal: 20,
    paddingVertical: 70
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#29292E',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 45,
    backgroundColor: "#29292E",
    borderRadius: 6,
    marginBottom: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: `#fff`
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#00875F",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  text: {
    color: '#E1E1E6',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  }
});

export default SignIn;

import React, { useState } from "react";
import { View, Button, StyleSheet, TextInput, TouchableOpacity, Text, Alert, ActivityIndicator } from "react-native";
import { useAuth } from "../../contexts/auth";
import { Ionicons } from '@expo/vector-icons';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSign() {
    if (!email || !senha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    setLoading(true);

    try {
      await signIn(email, senha);
    } catch (error) {
      Alert.alert("Erro", "O login falhou. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.welcomeText}>Bem vindo(a)!</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#aaa" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#aaa" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSign} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Entrar</Text>}
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotText}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'flex-start',
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    gap: 10
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#f3f3f3',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%",
    height: 45,
    backgroundColor: "#f3f3f3",
    borderRadius: 6,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: `#000`,
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  welcomeText: {
    color: '#000',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  forgotText: {
    color: "#151515",
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default SignIn;

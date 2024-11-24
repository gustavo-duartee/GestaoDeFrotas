import React, { useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from "react-native";
import { useAuth } from "../../contexts/auth";
import { getUserData } from "../../services/user";  // Importe o serviço de consulta

import styles from './styles';

const MinhaConta: React.FC = () => {
  const { user, signOut } = useAuth();
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      getUserData(user.email, 'seu_token_aqui')
        .then(data => {
          setUserData(data);
        })
        .catch(err => {
          console.error("Erro ao carregar dados do usuário", err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [user]);

  function handleSignOut() {
    signOut();
  }

  // Função para extrair as iniciais do nome
  const getInitials = (name: string) => {
    const nameParts = name.split(' ');
    const initials = nameParts.map((part: string) => part.charAt(0).toUpperCase());
    return initials.join('');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.subtitle}>Informações da conta</Text>
      </View>

      {/* Exibe as iniciais do nome do usuário */}
      <View style={styles.profileInfo}>
        <View style={styles.circle}>
          {userData?.nome ? (
            <Text style={styles.initialsText}>{getInitials(userData.nome)}</Text>
          ) : (
            <Ionicons name="person" size={40} color="gray" />
          )}
        </View>

        {/* Nome e Cargo ao lado do círculo */}
        <View style={styles.userDetails}>
          <Text style={styles.userName}>{userData?.nome}</Text>
          <Text style={styles.userPosition}>{userData?.cargo}</Text>
        </View>
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.titleInfo}>E-mail</Text>
        <Text style={styles.info}>{user?.email}</Text>

        {userData && (
          <>
            <Text style={styles.titleInfo}>Telefone</Text>
            <Text style={styles.info}>{userData.telefone}</Text>
          </>
        )}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Desconectar</Text>
        <Ionicons name="log-out-outline" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default MinhaConta;

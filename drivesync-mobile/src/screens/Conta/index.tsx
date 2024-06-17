import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAuth } from "../../contexts/auth";

import styles from './styles';

const MinhaConta: React.FC = () => {
  const { user, signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  const getUserInitials = (name: string) => {
    const initials = name.split(' ').map(part => part.charAt(0)).join('');
    return initials.toUpperCase().slice(0, 2);
  };

  return (
    <View style={styles.container}>

      <View style={styles.circle}>
        <Ionicons name="person" size={40} color="gray" />
        {/*<Text style={styles.initials}>{getUserInitials(user?.name || '')}</Text>*/}
      </View>

      {/*<View style={styles.userInfo}>
        <Text style={styles.info}>{user?.name}</Text>
      </View>*/}

      <View style={styles.userInfo}>
        <Text style={styles.info}>{user?.email}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Desconectar</Text>
        <Ionicons name="log-out-outline" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default MinhaConta;

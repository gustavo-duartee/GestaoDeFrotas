import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from './styles';

import axios from "axios";
import ViagemCard from "../../components/ViagemCard";
import ViagemStatus from "../../components/ViagemStatus";

export default function Atividades() {

  return (
    <View style={styles.container}>

      <ViagemStatus />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar Viagem"
          placeholderTextColor="#aaa"
        />
      </View>

      <Text style={styles.subtitle}>Histórico</Text>

      <View style={styles.cardContainer}>
        <ViagemCard />
        <ViagemCard />
        <ViagemCard />
      </View>
    </View>
  );
}

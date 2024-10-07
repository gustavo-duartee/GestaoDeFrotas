import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import styles from './styles';

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

      <Text style={styles.subtitle}>Anteriores</Text>

      <ScrollView style={styles.cardContainer}>
        <ViagemCard />
        <ViagemCard />
        <ViagemCard />
      </ScrollView>
    </View>
  );
}

import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import ViagemStatus from "../../components/ViagemStatus";
import { useAuth } from "../../contexts/auth";
import styles from "./styles";
import { Map } from "../../components/Map";

interface Coordenadas {
  latitude: number;
  longitude: number;
}

export default function Home() {
  const { user } = useAuth();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="person-circle-outline" size={50} color="#E1E1E6" />
        <View>
          <Text style={styles.greeting}>Olá, {user?.email}!</Text>
          <Text style={styles.subGreeting}>É hora de escolher seu plano</Text>
        </View>
      </View>


      <View style={styles.divider} />

      <ViagemStatus />

      <View style={styles.divider} />
      
    </ScrollView>
  );
}

const mapStyles = StyleSheet.create({
  map: {
    width: '100%',
    height: 400,
    marginTop: 20,
  },
});


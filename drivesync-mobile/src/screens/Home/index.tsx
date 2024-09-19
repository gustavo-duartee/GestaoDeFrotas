import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from "../../contexts/auth";
import MediaCard from "../../components/InfoCards";

export default function Home() {
  const { user } = useAuth();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <Ionicons name="person-circle-outline" size={50} color="#E1E1E6" />
        <View style={styles.headerContent}>
          <Text style={styles.greeting}>Bem vindo (a), </Text>
          <Text style={styles.subGreeting}>{user?.email}!</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <Text style={styles.subtitle}>Atente-se aos sinais</Text>

      {/* ScrollView horizontal para os cards */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsContainer}>
        <MediaCard />
      </ScrollView>

      <Text style={styles.subtitle}>Segurança em primeiro lugar</Text>

      {/* ScrollView horizontal para os cards */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsContainer}>
        <MediaCard />
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    padding: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E1E1E6',
  },
  subGreeting: {
    fontSize: 18,
    color: '#E1E1E6',
  },
  divider: {
    height: 2,
    backgroundColor: '#2c2c2c',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E1E1E6',
    marginVertical: 10,
    marginBottom: 20
  },
  cardsContainer: {
    flexDirection: 'row',
  },
  headerContent:{
    marginLeft: 10
  }
});

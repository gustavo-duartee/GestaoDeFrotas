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
        <View>
          <Text style={styles.greeting}>Olá, {user?.email}!</Text>
          <Text style={styles.subGreeting}>É hora de escolher seu plano</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <Text style={styles.subtitle}>Atente-se aos sinais</Text>

      {/* ScrollView horizontal para os cards */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsContainer}>
        <MediaCard />
      </ScrollView>

      <Text style={styles.subtitle}>Segurança em primeiro lugar</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E1E1E6',
  },
  subGreeting: {
    fontSize: 14,
    color: '#E1E1E6',
  },
  divider: {
    height: 1,
    backgroundColor: '#E1E1E6',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E1E1E6',
    marginVertical: 10,
  },
  cardsContainer: {
    flexDirection: 'row',
  },
});

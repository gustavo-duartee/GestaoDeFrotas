import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from "../../contexts/auth";
import MediaCard from "../../components/InfoCards";
import CardViagem from "../../components/ViagemStatus";

export default function Home() {
  const { user } = useAuth();

  return (
    <ScrollView style={styles.container}>


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
    backgroundColor: '#ffffff',
    padding: 12,
    paddingVertical: 30
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
    color: '#000000',
  },
  subGreeting: {
    fontSize: 18,
    color: '#000000',
  },
  divider: {
    height: 2,
    backgroundColor: '#f3f3f3',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 15,
  },
  cardsContainer: {
    flexDirection: 'row',
  },
  headerContent:{
    marginLeft: 10
  }
});

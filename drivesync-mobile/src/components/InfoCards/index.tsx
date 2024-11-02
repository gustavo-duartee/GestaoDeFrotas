import * as React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, View, ScrollView } from 'react-native';

// Componente para um único card
const VehicleSignalCard = ({ title, description, imageUri }) => (
  <Card style={styles.card}>
    <Card.Cover source={{ uri: imageUri }} style={styles.cardCover} />
    <Card.Content style={styles.cardContent}>
      <Title style={styles.title}>{title}</Title>
      <Paragraph style={styles.paragraph}>{description}</Paragraph>
    </Card.Content>
  </Card>
);

export default function MediaCard() {
  return (
    <ScrollView horizontal contentContainerStyle={styles.container} showsHorizontalScrollIndicator={false}>
      <VehicleSignalCard
        title="Sinais de Indicadores (Setas)"
        description="Observe os indicadores dos outros veículos para antecipar suas mudanças de direção."
        imageUri="https://example.com/indicators-image.jpg" // Substitua pelo URL da imagem relevante
      />
      <VehicleSignalCard
        title="Sinais de Freio"
        description="Observe as luzes de freio dos veículos à sua frente para se preparar para uma possível desaceleração ou parada."
        imageUri="https://example.com/brake-lights-image.jpg" // Substitua pelo URL da imagem relevante
      />
      <VehicleSignalCard
        title="Sinais de Luzes de Emergência"
        description="Se você vê um veículo com luzes de emergência ligadas, mantenha uma distância segura e evite ultrapassá-lo, se possível."
        imageUri="https://example.com/emergency-lights-image.jpg" // Substitua pelo URL da imagem relevante
      />
      <VehicleSignalCard
        title="Luzes de Reverso"
        description="As luzes de reverso indicam que um veículo está prestes a dar ré. Esteja atento e mantenha uma distância segura."
        imageUri="https://example.com/reverse-lights-image.jpg" // Substitua pelo URL da imagem relevante
      />
      <VehicleSignalCard
        title="Luzes de Farol"
        description="Se um veículo está com os faróis altos, isso pode ofuscar sua visão. Diminua a intensidade dos seus próprios faróis e ajuste sua velocidade."
        imageUri="https://example.com/headlights-image.jpg" // Substitua pelo URL da imagem relevante
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 15,
  },
  card: {
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    marginBottom: 15,
    width: 260,
    marginRight: 15,
    elevation: 4, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardCover: {
    height: 140,
  },
  cardContent: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  title: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 14,
    color: '#555',
    marginTop: 6,
  },
});

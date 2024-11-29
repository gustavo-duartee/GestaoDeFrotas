import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";

interface Manutencao {
  id: number;
  dt_manutencao: string;
  tp_manutencao: string;
  veiculoId: number;
  servico: string;
  descricao: string;
  custo: number;
}

interface ManutencaoCardProps {
  manutencao: Manutencao;
}

export default function ManutencaoCard({ manutencao }: ManutencaoCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.iconSquare}>
        <Ionicons style={styles.icon} name="build-outline" size={40} color="white" />
      </View>

      <View style={styles.content}>
        <Text style={styles.valueTitle}>Manutenção {manutencao.tp_manutencao}</Text>
        <Text style={styles.value}>{manutencao.servico}</Text>
        <Text style={styles.valueDate}>{new Date(manutencao.dt_manutencao).toLocaleDateString()}</Text>
        <View style={styles.contentDescription}>
          <Text style={styles.value}>{manutencao.descricao}</Text>
        </View>
      </View>
    </View>
  );
}

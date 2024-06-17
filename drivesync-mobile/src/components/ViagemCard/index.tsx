import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons'; // Importar o Ionicons

import styles from './styles';

export default function ViagemCard() {
    const viagemExemplo = {
        origem: "Resende",
        destino: "Quatis",
        dataSaida: "25/05/2023",
        horaSaida: "09:00",
        horaChegada: "10:00",
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.leftBorder}></View>
                <View style={styles.iconSquare}>
                    <Ionicons style={styles.icon} name="map-outline" size={40} />
                </View>

                <View style={styles.content}>
                    <View style={styles.row}>
                        <Text style={styles.valueTitle}>{viagemExemplo.origem}</Text>
                        <Ionicons name="arrow-forward-outline" size={20} color="white" />
                        <Text style={styles.valueTitle}>{viagemExemplo.destino}</Text>
                    </View>

                    <Text style={styles.valueDate}>{viagemExemplo.dataSaida}</Text>

                    <View style={styles.row}>
                        <Text style={styles.value}>{viagemExemplo.horaSaida}</Text>
                        <Text style={styles.value}>{viagemExemplo.horaChegada}</Text>
                    </View>
                </View>

                <View style={styles.iconSquareCheck}>
                    <Ionicons style={styles.iconCheck} name="checkmark-outline" size={30} />
                </View>
            </View>
        </View>
    );
}

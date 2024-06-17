import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons'; // Importar o Ionicons

import styles from './styles';

export default function ViagemStatus() {

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.iconSquare}>
                    <Ionicons style={styles.icon} name="mail-open-outline" size={40} />
                </View>

                <View style={styles.content}>
                    <View style={styles.row}>
                        <Text style={styles.title}>Nenhuma viagem em andamento.</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.subtitle}>Clique aqui para iniciar uma nova viagem.</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

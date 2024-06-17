import React from "react";
import { View, Text, TextInput, ScrollView, Button } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import ViagemStatus from "../../components/ViagemStatus";
import { useAuth } from "../../contexts/auth";

export default function Atividades() {
    const { user } = useAuth();

    // Função para simular um pedido de suporte
    const handleSuportePress = () => {
        console.log("Abrindo tela de suporte...");
    };

    // Dados das dicas e ícones Ionicons correspondentes
    const dicas = [
        {
            icon: "car-sport-outline",
            text: "Mantenha os pneus calibrados corretamente para economizar combustível."
        },
        {
            icon: "speedometer-outline",
            text: "Verifique regularmente o nível de óleo do motor."
        },
        {
            icon: "car-outline",
            text: "Mantenha uma distância segura do veículo à frente para evitar colisões."
        },
        {
            icon: "rainy-outline",
            text: "Reduza a velocidade em condições adversas como chuva e neblina."
        },
        {
            icon: "car-sport-sharp",
            text: "Estacione em áreas bem iluminadas e seguras."
        },
        {
            icon: "bed-outline",
            text: "Faça pausas regulares durante longas viagens para descanso."
        },
        {
            icon: "medkit-outline",
            text: "Mantenha um kit de primeiros socorros e ferramentas no veículo."
        },
        {
            icon: "analytics-outline",
            text: "Utilize aplicativos para monitorar o consumo de combustível e desempenho do veículo."
        }
    ];

    // Função para renderizar os cards
    const renderCards = () => {
        return dicas.map((dica, index) => (
            <View key={index} style={styles.card}>
                <Ionicons name={dica.icon} size={48} color="#E1E1E6" style={styles.cardIcon} />
                <Text style={styles.cardText}>{dica.text}</Text>
            </View>
        ));
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.userInfo}>
                <Text style={styles.info}>Olá, {user?.email}!</Text>
            </View>

            <ViagemStatus />

            <View style={styles.divider} />

            {/* Seção de Dicas e Informações Úteis */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Dicas e Informações Úteis</Text>
                <Text style={styles.sectionContent}>
                    Confira dicas para economizar combustível, informações sobre manutenção preventiva e outras orientações importantes para motoristas.
                </Text>

                {/* Renderização dos Cards */}
                {renderCards()}
            </View>

            <View style={styles.divider} />

            {/* Seção de Suporte ao Usuário */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Suporte ao Usuário</Text>
                <Text style={styles.sectionContent}>
                    Precisa de ajuda? Entre em contato conosco para suporte técnico ou outras questões relacionadas ao uso do aplicativo.
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua mensagem..."
                    placeholderTextColor="#aaa"
                    multiline
                />
                <Button title="Enviar" onPress={handleSuportePress} />
            </View>
        </ScrollView>
    );
}

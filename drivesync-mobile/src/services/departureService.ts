// src/services/departureService.ts
import api from "./api"; // Certifique-se de que o caminho está correto

export async function registerDeparture(departureData: {
  user_id: string;
  license_plate: string;
  description: string;
  coords: {
    latitude: number;
    longitude: number;
    timestamp: number;
  }[];
}) {
  try {
    const response = await api.post("/api/departures", departureData);
    return response.data;
  } catch (error) {
    console.error("Erro ao registrar a partida:", error);
    throw new Error("Não foi possível registrar a partida.");
  }
}

import axios from "axios";
import API_BASE_URL from "../config/config"; // Importe a URL do arquivo de configuração

// Função para pegar os dados do usuário logado
export async function getUserData(email: string, token: string) {
  try {
    const response = await axios.get(`${API_BASE_URL}api/Account/GetUserByEmail/${email}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; // Retorna os dados do usuário
  } catch (error) {
    console.error("Erro ao buscar dados do usuário:", error);
    throw new Error("Erro ao buscar dados do usuário");
  }
}

export async function getUserId(id: string, token: string, email: string) {
  try {
    const response = await axios.get(`${API_BASE_URL}api/Account/GetUserByEmail/${email}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const userId = response.data?.id;
    return userId;
  } catch (error) {
    console.error("Erro ao buscar dados do usuário:", error);
    throw new Error("Erro ao buscar dados do usuário");
  }
}

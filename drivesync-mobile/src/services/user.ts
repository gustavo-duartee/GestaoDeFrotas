import axios from 'axios';

// Função para pegar os dados do usuário logado
export async function getUserData(email: string, token: string) {
  try {
    const response = await axios.get(`https://a6b0-177-71-67-66.ngrok-free.app/api/Account/GetUserByEmail/${email}`, {
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

import api from './api';

export async function signIn(email: string, senha: string): Promise<Response> {
  try {
    const response = await api.post('/api/Account/LoginUser', { email, senha });

    if (response.data && response.data.token) {
      return {
        token: response.data.token,
        user: {
          name: response.data.name || '',
          email: response.data.email || email,
        },
      };
    } else {
      throw new Error('Invalid response from server');
    }
  } catch (error) {
    throw new Error('Failed to login');
  }
}

import React, { createContext, useState, useContext, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signIn as apiSignIn } from '../services/auth';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  loading: boolean;
  signIn(email: string, senha: string): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState(false);

  async function signIn(email: string, senha: string) {
    setLoading(true);

    try {
      const response = await apiSignIn(email, senha);
      setUser(response.user);

      await AsyncStorage.setItem('@App:user', JSON.stringify(response.user));
      await AsyncStorage.setItem('@App:token', response.token);
    } catch (error) {
      throw new Error('Failed to login');
    } finally {
      setLoading(false);
    }
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

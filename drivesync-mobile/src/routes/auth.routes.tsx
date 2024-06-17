// auth.routes.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/SignIn';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen 
      name="Login" 
      component={SignIn} 
      options={{
        headerStyle: { backgroundColor: '#29292E' }, // Cor de fundo do cabeçalho
        headerTintColor: '#FFFFFF', // Cor do texto do cabeçalho
      }}
    />
  </AuthStack.Navigator>
);

export default AuthRoutes;

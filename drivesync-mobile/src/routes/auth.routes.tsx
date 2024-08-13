import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import OnboardingScreen from '../screens/Inicial';
import SignIn from '../screens/Login';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Onboarding"
      component={OnboardingScreen}
      options={{ headerShown: false }} // Oculta o cabeçalho para a tela de onboarding
    />
    <AuthStack.Screen
      name="Login"
      component={SignIn}
      options={({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#161616',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => (
          <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        ),
      })}
    />
  </AuthStack.Navigator>
);

export default AuthRoutes;

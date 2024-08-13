import React from 'react';
import { StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import Viagem from '../screens/Viagem';
import MinhaConta from '../screens/Conta';
import Atividades from '../screens/Atividades';
import Veiculo from '../screens/Veiculos';
import DetalhesVeiculo from '../screens/Veiculos/Detalhes';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const VeiculoStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Veiculos"
      component={Veiculo}
      options={{
        headerStyle: { backgroundColor: '#29292E' },
        headerTintColor: '#FFFFFF',
        title: 'Veículos',
        headerShown: false
      }}
    />
    <Stack.Screen
      name="DetalhesVeiculo"
      component={DetalhesVeiculo}
      options={{
        headerStyle: { backgroundColor: '#29292E' },
        headerTintColor: '#FFFFFF',
        title: 'Detalhes do Veículo'
      }}
    />
  </Stack.Navigator>
);

const AppRoutes: React.FC = () => (
  <>
    <StatusBar backgroundColor="#161616" barStyle="light-content" />
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#04D361',
        tabBarInactiveTintColor: '#C4C4CC',
        tabBarStyle: {
          backgroundColor: '#161616',
        },
        tabBarShowLabel: true,
        headerStyle: { backgroundColor: '#161616' },
          headerTintColor: '#E1E1E6',
          headerTitleStyle: {
            fontSize: 28,
            fontWeight: 'bold',
          },
      }}
    >
      <Tab.Screen
        name="Início"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Atividades"
        component={Atividades}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Nova Viagem"
        component={Viagem}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-outline" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Veículos"
        component={VeiculoStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bus" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Minha Conta"
        component={MinhaConta}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  </>
);

export default AppRoutes;
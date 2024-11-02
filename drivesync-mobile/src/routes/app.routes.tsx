// src/routes/app.routes.tsx
import React from 'react';
import { StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import Viagem from '../screens/Partida';
import MinhaConta from '../screens/Conta';
import Atividades from '../screens/Atividades';
import Veiculo from '../screens/Veiculos';
import DetalhesVeiculo from '../screens/Veiculos/Detalhes';
import Home from '../screens/Home';
import DetalhesViagem from '../screens/DetalhesViagem';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const VeiculoStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Veiculos"
      component={Veiculo}
      options={{
        headerStyle: { backgroundColor: '#ffffff' },
        headerTintColor: '#000000',
        title: 'Veículos',
        headerShown: false
      }}
    />
    <Stack.Screen
      name="DetalhesVeiculo"
      component={DetalhesVeiculo}
      options={{
        headerStyle: { backgroundColor: '#ffffff' },
        headerTintColor: '#000000',
        title: ''
      }}
    />
  </Stack.Navigator>
);

const ViagemStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Atividade"
      component={Atividades}
      options={{
        headerStyle: { backgroundColor: '#161616' },
        headerTintColor: '#FFFFFF',
        title: 'Veículos',
        headerShown: false
      }}
    />
    <Stack.Screen
      name="DetalhesViagem"
      component={DetalhesViagem}
      options={{
        headerStyle: { backgroundColor: '#ffffff' },
        headerTintColor: '#000000',
        title: ''
      }}
    />
  </Stack.Navigator>
);

const AppRoutes: React.FC = () => (
  <>
    <StatusBar backgroundColor="#ffffff" barStyle="light-content" />
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#060606',
        tabBarInactiveTintColor: '#727272',
        tabBarStyle: {
          backgroundColor: '#ffffff',
        },
        tabBarShowLabel: true,
        headerStyle: { backgroundColor: '#ffffff' },
          headerTintColor: '#E1E1E6',
          headerTitleStyle: {
            fontSize: 36,
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
          title: 'Início',
          headerStyle: { backgroundColor: '#ffffff' },
          headerTintColor: '#000000'
        }}
      />
      <Tab.Screen
        name="Atividades"
        component={ViagemStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={25} color={color} />
          ),
          title: 'Atividades', // Adiciona o título para a tela 'Atividades'
          headerStyle: { backgroundColor: '#ffffff' },
          headerTintColor: '#000000'
        }}
      />
      <Tab.Screen
        name="Nova Viagem"
        component={Viagem}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-outline" size={35} color={color} />
          ),
          title: 'Nova Viagem', // Adiciona o título para a tela 'Nova Viagem'
          headerStyle: { backgroundColor: '#ffffff' },
          headerTintColor: '#000000'
        }}
      />
      <Tab.Screen
        name="Veículos"
        component={VeiculoStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bus" size={25} color={color} />
          ),
          title: 'Veículos',
          headerStyle: { backgroundColor: '#ffffff' },
          headerTintColor: '#000000'
        }}
      />
      <Tab.Screen
        name="Minha Conta"
        component={MinhaConta}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={25} color={color} />
          ),
          title: 'Conta', // Adiciona o título para a tela 'Minha Conta'
          headerStyle: { backgroundColor: '#ffffff' },
          headerTintColor: '#000000'
        }}
      />
    </Tab.Navigator>
  </>
);

export default AppRoutes;

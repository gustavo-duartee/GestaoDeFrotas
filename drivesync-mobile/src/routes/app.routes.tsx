// src/routes/app.routes.tsx
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
        title: 'Veículos'
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
    <StatusBar backgroundColor="#202024" barStyle="light-content" />
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#00B37E',
        tabBarInactiveTintColor: '#aaaaaa',
        tabBarStyle: {
          backgroundColor: '#29292E',
        },
        tabBarShowLabel: false,
        headerShown: route.name !== 'Veículos', // Oculta o cabeçalho para a tela 'Veículos'
      })}
    >
      <Tab.Screen
        name="Início"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={25} color={color} />
          ),
          title: 'Início',
          headerStyle: { backgroundColor: '#29292E' },
          headerTintColor: '#FFFFFF'
        }}
      />
      <Tab.Screen
        name="Atividades"
        component={Atividades}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={25} color={color} />
          ),
          title: 'Atividades', // Adiciona o título para a tela 'Atividades'
          headerStyle: { backgroundColor: '#29292E' },
          headerTintColor: '#FFFFFF'
        }}
      />
      <Tab.Screen
        name="Nova Viagem"
        component={Viagem}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-outline" size={40} color={color} />
          ),
          title: 'Nova Viagem', // Adiciona o título para a tela 'Nova Viagem'
          headerStyle: { backgroundColor: '#29292E' },
          headerTintColor: '#FFFFFF'
        }}
      />
      <Tab.Screen
        name="Veículos"
        component={VeiculoStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="car" size={25} color={color} />
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
          title: 'Minha Conta', // Adiciona o título para a tela 'Minha Conta'
          headerStyle: { backgroundColor: '#29292E' },
          headerTintColor: '#FFFFFF'
        }}
      />
    </Tab.Navigator>
  </>
);

export default AppRoutes;

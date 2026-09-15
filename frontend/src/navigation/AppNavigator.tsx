// src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types/navigation';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import DashboardScreen from '../screens/DashboardScreen';
import MateriasScreen from '../screens/MateriasScreen';
import ApuntesScreen from '../screens/ApuntesScreen';
import ExamenesScreen from '../screens/ExamenesScreen';
import FavoritosScreen from '../screens/FavoritosScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Inicio' }}
        />

        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ title: 'Dashboard' }}
        />

        <Stack.Screen
          name="Materias"
          component={MateriasScreen}
          options={{ title: 'Mis Materias' }}
        />

        <Stack.Screen
          name="Apuntes"
          component={ApuntesScreen}
          options={{ title: 'Mis Apuntes' }}
        />

        <Stack.Screen
          name="Examenes"
          component={ExamenesScreen}
          options={{ title: 'Próximos Exámenes' }}
        />

        <Stack.Screen
          name="Favoritos"
          component={FavoritosScreen}
          options={{ title: 'Favoritos' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
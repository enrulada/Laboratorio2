// src/services/authService.ts
import * as SecureStore from 'expo-secure-store';

// IMPORTANTE: reemplazar por la IP local de tu PC (no localhost).
// - Celular físico con Expo Go: la IP de tu wifi (ver cómo obtenerla más abajo)
// - Emulador Android en la misma PC: usar 10.0.2.2
   const API_URL = 'http://192.168.0.49:8080/api';

export interface LoginRequest {
  email: string;
  contrasena: string;
}

export interface Usuario {
  id_usuario: number;
  nombre: string;
  apellido: string;
  email: string;
  id_rol: number;
  activo: boolean;
}

export interface LoginResponse {
  token: string;
  usuario: Usuario;
}

interface ApiErrorBody {
  mensaje: string;
}

export async function login(datos: LoginRequest): Promise<LoginResponse> {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos),
  });

  if (!response.ok) {
    const error: ApiErrorBody = await response.json();
    throw new Error(error.mensaje ?? 'Error al iniciar sesión');
  }

  const data: LoginResponse = await response.json();

  await SecureStore.setItemAsync('token', data.token);
  await SecureStore.setItemAsync('usuario', JSON.stringify(data.usuario));

  return data;
}

export async function logout(): Promise<void> {
  await SecureStore.deleteItemAsync('token');
  await SecureStore.deleteItemAsync('usuario');
}

export async function obtenerToken(): Promise<string | null> {
  return SecureStore.getItemAsync('token');
}

export async function obtenerUsuario(): Promise<Usuario | null> {
  const data = await SecureStore.getItemAsync('usuario');
  return data ? JSON.parse(data) : null;
}
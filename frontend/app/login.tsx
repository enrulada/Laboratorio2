import React, { useState } from 'react';
import {
  View,
  TextInput,
  Pressable,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
} from 'react-native';

import { useRouter } from 'expo-router';
import { login } from '../src/services/authService';

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [cargando, setCargando] = useState(false);

  const handleLogin = async () => {
    setError(null);
    setCargando(true);

    try {
      await login({ email, contrasena });

      // Login no queda en el historial.
      router.replace('/home');
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : 'Error inesperado'
      );
    } finally {
      setCargando(false);
    }
  };

  return (
    <View style={styles.container}>

      <Image
        source={require('../src/assets/mentor_estudiantil_studenthub.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.titulo}>StudentHub</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry
      />

      {error && (
        <Text style={styles.error}>
          {error}
        </Text>
      )}

      <Pressable
        style={[
          styles.boton,
          (!email || !contrasena) &&
            styles.botonDeshabilitado,
        ]}
        onPress={handleLogin}
        disabled={cargando || !email || !contrasena}
      >
        {cargando ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.botonTexto}>
            Ingresar
          </Text>
        )}
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },

  logo: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginBottom: 15,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
    color: '#1e2a5e',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },

  error: {
    color: 'red',
    marginBottom: 12,
    textAlign: 'center',
  },

  boton: {
    backgroundColor: '#1e2a5e',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },

  botonDeshabilitado: {
    opacity: 0.5,
  },

  botonTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

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

  // LOGIN ORIGINAL CON BACKEND
  const handleLogin = async () => {
    setError(null);
    setCargando(true);

    try {
      await login({ email, contrasena });

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

  // MODO DEMOSTRACIÓN SIN BACKEND
  const handleDemo = () => {
    setError(null);
    router.replace('/home');
  };

  return (
    <View style={styles.container}>
      {/* LOGO DE STUDENTHUB */}
      <Image
        source={require(
          '../src/assets/mentor_estudiantil_studenthub.png'
        )}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.titulo}>
        StudentHub
      </Text>

      <Text style={styles.subtitulo}>
        Todo tu estudio en un solo lugar
      </Text>

      {/* CORREO ELECTRÓNICO */}
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      {/* CONTRASEÑA */}
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry
      />

      {/* MENSAJE DE ERROR */}
      {error && (
        <Text style={styles.error}>
          {error}
        </Text>
      )}

      {/* BOTÓN LOGIN ORIGINAL */}
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
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={styles.botonTexto}>
            Ingresar
          </Text>
        )}
      </Pressable>

      {/* BOTÓN MODO DEMOSTRACIÓN */}
      <Pressable
        style={styles.botonDemo}
        onPress={handleDemo}
        disabled={cargando}
      >
        <Text style={styles.botonTexto}>
          🎓 Entrar en modo demostración
        </Text>
      </Pressable>

      <Text style={styles.nota}>
        Acceso de prueba para la presentación académica.
        No requiere conexión al backend.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#FFFFFF',
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
    marginBottom: 8,
    textAlign: 'center',
    color: '#1e2a5e',
  },

  subtitulo: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
  },

  error: {
    color: '#DC2626',
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
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },

  botonDemo: {
    backgroundColor: '#2563EB',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },

  nota: {
    textAlign: 'center',
    color: '#666666',
    fontSize: 13,
    marginTop: 15,
    lineHeight: 20,
  },
});

import { View, Text, Pressable, FlatList } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

type Contenido = {
  id: number;
  nombre: string;
  materia: string;
  favorito: boolean;
};

const datosIniciales: Contenido[] = [
  {
    id: 1,
    nombre: 'Resumen de Matemática',
    materia: 'Matemática',
    favorito: true,
  },
  {
    id: 2,
    nombre: 'Ejercicios de Programación',
    materia: 'Programación',
    favorito: false,
  },
  {
    id: 3,
    nombre: 'Guía de Base de Datos',
    materia: 'Base de Datos',
    favorito: true,
  },
];

export default function FavoritosScreen() {
  const router = useRouter();

  const [contenidos, setContenidos] =
    useState<Contenido[]>(datosIniciales);

  const cambiarFavorito = (id: number) => {
    const nuevosContenidos = contenidos.map((contenido) => {
      if (contenido.id === id) {
        return {
          ...contenido,
          favorito: !contenido.favorito,
        };
      }

      return contenido;
    });

    setContenidos(nuevosContenidos);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F5F7FA',
        padding: 25,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#2563EB',
          marginTop: 30,
          textAlign: 'center',
        }}
      >
        ⭐ Favoritos
      </Text>

      <Text
        style={{
          marginTop: 15,
          marginBottom: 25,
          fontSize: 18,
          color: '#555',
          textAlign: 'center',
        }}
      >
        Marcá tus contenidos favoritos.
      </Text>

      <FlatList
        data={contenidos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => cambiarFavorito(item.id)}
            style={{
              backgroundColor: '#FFFFFF',
              padding: 20,
              borderRadius: 10,
              marginBottom: 15,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#1e2a5e',
              }}
            >
              {item.favorito ? '⭐' : '☆'} {item.nombre}
            </Text>

            <Text
              style={{
                marginTop: 8,
                fontSize: 16,
                color: '#555',
              }}
            >
              Materia: {item.materia}
            </Text>

            <Text
              style={{
                marginTop: 8,
                fontSize: 14,
                color: '#666',
              }}
            >
              {item.favorito
                ? 'Tocá para quitar de favoritos'
                : 'Tocá para agregar a favoritos'}
            </Text>
          </Pressable>
        )}
      />

      <Pressable
        onPress={() => router.back()}
        style={{
          padding: 15,
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: '#2563EB',
            fontSize: 16,
            fontWeight: 'bold',
          }}
        >
          ← Volver
        </Text>
      </Pressable>
    </View>
  );
}
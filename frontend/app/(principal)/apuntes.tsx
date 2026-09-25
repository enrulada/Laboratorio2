import {
  View,
  Text,
  Pressable,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import { useEffect, useState } from 'react';
import {
  Link,
  useLocalSearchParams,
  useRouter,
} from 'expo-router';

type Apunte = {
  id: number;
  titulo: string;
  descripcion: string;
};

export default function ApuntesScreen() {
  const router = useRouter();

  const { idMateria, nombreMateria } = useLocalSearchParams<{
    idMateria?: string;
    nombreMateria?: string;
  }>();

  const [apuntes, setApuntes] = useState<Apunte[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    cargarApuntes();
  }, [idMateria]);

  const cargarApuntes = async () => {
    try {
      setCargando(true);

      // Por ahora usamos datos locales de StudentHub.
      // Luego podemos reemplazarlos por fetch al backend.
      const datos: Apunte[] = [
        {
          id: 1,
          titulo: 'Resumen de la materia',
          descripcion: 'Conceptos principales para estudiar.',
        },
        {
          id: 2,
          titulo: 'Ejercicios prácticos',
          descripcion: 'Actividades para practicar los contenidos.',
        },
        {
          id: 3,
          titulo: 'Preparación para examen',
          descripcion: 'Material de repaso para la evaluación.',
        },
      ];

      setApuntes(datos);
    } catch (error) {
      console.error('Error al cargar los apuntes:', error);
    } finally {
      setCargando(false);
    }
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
        📝 Mis Apuntes
      </Text>

      {nombreMateria && (
        <>
          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              fontWeight: 'bold',
              color: '#1e2a5e',
              textAlign: 'center',
            }}
          >
            Materia: {nombreMateria}
          </Text>

          <Text
            style={{
              marginTop: 8,
              marginBottom: 20,
              fontSize: 16,
              color: '#666',
              textAlign: 'center',
            }}
          >
            ID de materia: {idMateria}
          </Text>
        </>
      )}

      {cargando ? (
        <ActivityIndicator
          size="large"
          color="#2563EB"
          style={{ marginTop: 30 }}
        />
      ) : (
        <FlatList
          data={apuntes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: '#FFFFFF',
                padding: 18,
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
                {item.titulo}
              </Text>

              <Text
                style={{
                  marginTop: 8,
                  fontSize: 16,
                  color: '#555',
                }}
              >
                {item.descripcion}
              </Text>
            </View>
          )}
        />
      )}

      {/* LINK DE EXPO ROUTER */}
      <Link
        href="/materias"
        style={{
          color: '#2563EB',
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center',
          padding: 10,
        }}
      >
        📚 Ir a Mis Materias
      </Link>

      {/* NAVEGACIÓN CON ROUTER */}
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
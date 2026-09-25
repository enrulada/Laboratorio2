import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function MateriasScreen() {
  const router = useRouter();

  const abrirMateria = (id: number, nombre: string) => {
    router.push({
      pathname: '/apuntes',
      params: {
        idMateria: id.toString(),
        nombreMateria: nombre,
      },
    });
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#F5F7FA',
      }}
      contentContainerStyle={{
        padding: 25,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#2563EB',
          marginTop: 30,
        }}
      >
        📖 Mis Materias
      </Text>

      <Text
        style={{
          marginTop: 15,
          marginBottom: 25,
          fontSize: 18,
          color: '#555',
        }}
      >
        Seleccioná una materia para consultar sus apuntes.
      </Text>

      <Pressable
        onPress={() => abrirMateria(1, 'Matemática')}
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
          }}
        >
          📐 Matemática
        </Text>
      </Pressable>

      <Pressable
        onPress={() => abrirMateria(2, 'Programación')}
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
          }}
        >
          💻 Programación
        </Text>
      </Pressable>

      <Pressable
        onPress={() => abrirMateria(3, 'Base de Datos')}
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
          }}
        >
          🗄️ Base de Datos
        </Text>
      </Pressable>

      <Pressable
        onPress={() => router.back()}
        style={{
          marginTop: 20,
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
    </ScrollView>
  );
}
import { View, Text, Pressable, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

type Materia = {
  id: number;
  nombre: string;
  icono: string;
};

const materias: Materia[] = [
  { id: 1, nombre: 'Matemática', icono: '📐' },
  { id: 2, nombre: 'Programación', icono: '💻' },
  { id: 3, nombre: 'Base de Datos', icono: '🗄️' },
];

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

      <FlatList
        data={materias}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => abrirMateria(item.id, item.nombre)}
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
              {item.icono} {item.nombre}
            </Text>
          </Pressable>
        )}
      />

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
    </View>
  );
}
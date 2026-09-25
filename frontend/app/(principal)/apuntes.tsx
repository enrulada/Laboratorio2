import { View, Text, Pressable, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function ApuntesScreen() {
  const router = useRouter();

  // Recibimos los datos enviados desde Materias
  const { idMateria, nombreMateria } = useLocalSearchParams<{
    idMateria?: string;
    nombreMateria?: string;
  }>();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#F5F7FA',
      }}
      contentContainerStyle={{
        flexGrow: 1,
        padding: 25,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#2563EB',
          }}
        >
          📝 Mis Apuntes
        </Text>

        {nombreMateria ? (
          <>
            <Text
              style={{
                marginTop: 20,
                fontSize: 20,
                fontWeight: 'bold',
                color: '#1e2a5e',
              }}
            >
              Materia: {nombreMateria}
            </Text>

            <Text
              style={{
                marginTop: 8,
                fontSize: 16,
                color: '#666',
              }}
            >
              ID de materia: {idMateria}
            </Text>

            <Text
              style={{
                marginTop: 20,
                fontSize: 18,
                color: '#555',
                textAlign: 'center',
              }}
            >
              Aquí se mostrarán los apuntes correspondientes a esta materia.
            </Text>
          </>
        ) : (
          <Text
            style={{
              marginTop: 20,
              fontSize: 18,
              color: '#555',
              textAlign: 'center',
            }}
          >
            Aquí administraremos los apuntes.
          </Text>
        )}

        <Pressable
          onPress={() => router.back()}
          style={{
            marginTop: 30,
            padding: 15,
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
    </ScrollView>
  );
}
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function FavoritosScreen() {
  const router = useRouter();

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
            textAlign: 'center',
          }}
        >
          ⭐ Favoritos
        </Text>

        <Text
          style={{
            marginTop: 15,
            fontSize: 18,
            color: '#555',
            textAlign: 'center',
          }}
        >
          Aquí encontrarás tus contenidos favoritos.
        </Text>

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
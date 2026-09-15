import { View, Text } from 'react-native';

export default function FavoritosScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F7FA',
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#2563EB',
        }}
      >
        ⭐ Favoritos
      </Text>

      <Text
        style={{
          marginTop: 15,
          fontSize: 18,
          color: '#555',
        }}
      >
        Aquí encontrarás tus contenidos favoritos.
      </Text>
    </View>
  );
}
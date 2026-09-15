import { TouchableOpacity, Text } from 'react-native';

export default function Card({ titulo, descripcion, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#FFFFFF',
        marginTop: 20,
        padding: 20,
        borderRadius: 15,
        elevation: 4,
      }}
    >
      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
        }}
      >
        {titulo}
      </Text>

      <Text
        style={{
          marginTop: 8,
          color: '#666',
          fontSize: 16,
        }}
      >
        {descripcion}
      </Text>
    </TouchableOpacity>
  );
}
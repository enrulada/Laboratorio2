import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';

import Title from '../src/components/Title';

export default function HomeScreen() {
  const router = useRouter();

  const irAlDashboard = () => {
    router.push('/dashboard');
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F7FA',
        padding: 24,
      }}
    >
      <Title />

      <Text
        style={{
          fontSize: 18,
          marginTop: 10,
          marginBottom: 30,
          color: '#555',
          textAlign: 'center',
        }}
      >
        Todo tu estudio en un solo lugar
      </Text>

      <Text
        onPress={irAlDashboard}
        style={{
          backgroundColor: '#1e2a5e',
          color: '#fff',
          paddingVertical: 14,
          paddingHorizontal: 28,
          borderRadius: 8,
          fontSize: 16,
          fontWeight: 'bold',
        }}
      >
        Comenzar
      </Text>
    </View>
  );
}
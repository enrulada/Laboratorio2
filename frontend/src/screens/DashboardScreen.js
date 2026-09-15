import { View, Text } from 'react-native';
import Card from '../components/Card';

export default function DashboardScreen({ navigation }) {
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
          fontSize: 32,
          fontWeight: 'bold',
          color: '#2563EB',
          marginTop: 30,
        }}
      >
        📚 StudentHub
      </Text>

      <Text
        style={{
          fontSize: 24,
          fontWeight: '600',
          marginTop: 25,
        }}
      >
        Hola, Erica 👋
      </Text>

      <Text
        style={{
          fontSize: 17,
          color: '#666',
          marginTop: 8,
        }}
      >
        Todo tu estudio en un solo lugar
      </Text>

      <Card
        titulo="📖 Mis Materias"
        descripcion="Administrá todas tus materias."
        onPress={() => navigation.navigate('Materias')}
      />

      <Card
        titulo="📝 Mis Apuntes"
        descripcion="Consultá todos tus apuntes."
        onPress={() => navigation.navigate('Apuntes')}
      />

      <Card
        titulo="📅 Próximos Exámenes"
        descripcion="Organizá tus fechas de examen."
        onPress={() => navigation.navigate('Examenes')}
      />

      <Card
        titulo="⭐ Favoritos"
        descripcion="Accedé rápidamente a tus contenidos."
        onPress={() => navigation.navigate('Favoritos')}
      />

    </View>
  );
}
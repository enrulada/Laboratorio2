import { Pressable, Text } from 'react-native';

export default function CustomButton({ navigation }) {

  function iniciarAplicacion() {
    navigation.navigate('Dashboard');
  }

  return (
    <Pressable
      onPress={iniciarAplicacion}
      style={{
        marginTop: 30,
        backgroundColor: '#2563EB',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
      }}
    >
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: 18,
          fontWeight: 'bold',
        }}
      >
        IR AL DASHBOARD
      </Text>
    </Pressable>
  );
}
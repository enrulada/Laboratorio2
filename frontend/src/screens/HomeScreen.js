import { View, Text } from 'react-native';
import Title from '../components/Title';
import CustomButton from '../components/CustomButton';

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F7FA',
      }}
    >
      <Title />

      <Text
        style={{
          fontSize: 18,
          marginTop: 10,
          color: '#555',
        }}
      >
        Todo tu estudio en un solo lugar
      </Text>

      <CustomButton navigation={navigation} />

    </View>
  );
}
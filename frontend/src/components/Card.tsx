import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import type { AppTheme } from '../theme/theme';

type CardProps = {
  titulo: string;
  descripcion: string;
  onPress: () => void;
};

export default function Card({
  titulo,
  descripcion,
  onPress,
}: CardProps) {
  return (
    <CardContainer onPress={onPress} activeOpacity={0.85}>
      <GradientCard
        colors={['#2563EB', '#60A5FA']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Titulo>{titulo}</Titulo>
        <Descripcion>{descripcion}</Descripcion>
      </GradientCard>
    </CardContainer>
  );
}

const CardContainer = styled.TouchableOpacity`
  margin-top: 20px;
  border-radius: 15px;
  overflow: hidden;
  elevation: 4;
`;

const GradientCard = styled(LinearGradient)`
  padding: 20px;
  border-radius: 15px;
`;

const Titulo = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
`;

const Descripcion = styled.Text`
  margin-top: 8px;
  color: #f8fafc;
  font-size: 16px;
`;
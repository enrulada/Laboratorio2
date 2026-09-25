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
    <CardContainer onPress={onPress}>
      <Titulo>{titulo}</Titulo>
      <Descripcion>{descripcion}</Descripcion>
    </CardContainer>
  );
}

const CardContainer = styled.TouchableOpacity<{ theme: AppTheme }>`
  background-color: ${({ theme }) => theme.colors.surface};
  margin-top: 20px;
  padding: 20px;
  border-radius: 15px;
  elevation: 4;
`;

const Titulo = styled.Text<{ theme: AppTheme }>`
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

const Descripcion = styled.Text<{ theme: AppTheme }>`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 16px;
`;
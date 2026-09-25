import { useRouter } from 'expo-router';
import styled from 'styled-components/native';

import Card from '../../src/components/Card';
import type { AppTheme } from '../../src/theme/theme';
import { useAppTheme } from '../../src/context/ThemeContext';

export default function DashboardScreen() {
  const router = useRouter();

  const { isDarkTheme, toggleTheme } = useAppTheme();

  return (
    <Container contentContainerStyle={{ paddingBottom: 40 }}>
      <Titulo>📚 StudentHub</Titulo>

      <Saludo>Hola 👋</Saludo>

      <Subtitulo>Todo tu estudio en un solo lugar</Subtitulo>

      <BotonTema onPress={toggleTheme}>
        <TextoBotonTema>
          {isDarkTheme ? '☀️ Tema claro' : '🌙 Tema oscuro'}
        </TextoBotonTema>
      </BotonTema>

      <Card
        titulo="📖 Mis Materias"
        descripcion="Administrá todas tus materias."
        onPress={() => router.push('/materias')}
      />

      <Card
        titulo="📝 Mis Apuntes"
        descripcion="Consultá todos tus apuntes."
        onPress={() => router.push('/apuntes')}
      />

      <Card
        titulo="📅 Próximos Exámenes"
        descripcion="Organizá tus fechas de examen."
        onPress={() => router.push('/examenes')}
      />

      <Card
        titulo="⭐ Favoritos"
        descripcion="Accedé rápidamente a tus contenidos."
        onPress={() => router.push('/favoritos')}
      />
    </Container>
  );
}

const Container = styled.ScrollView<{ theme: AppTheme }>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 25px;
`;

const Titulo = styled.Text<{ theme: AppTheme }>`
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 30px;
`;

const Saludo = styled.Text<{ theme: AppTheme }>`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 25px;
`;

const Subtitulo = styled.Text<{ theme: AppTheme }>`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 8px;
  margin-bottom: 20px;
`;

const BotonTema = styled.TouchableOpacity<{ theme: AppTheme }>`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 14px;
  border-radius: 10px;
  margin-bottom: 20px;
  align-items: center;
`;

const TextoBotonTema = styled.Text<{ theme: AppTheme }>`
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: 16px;
  font-weight: bold;
`;
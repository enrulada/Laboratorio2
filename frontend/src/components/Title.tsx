import styled from 'styled-components/native';
import type { AppTheme } from '../theme/theme';

export default function Title() {
  return <Titulo>StudentHub</Titulo>;
}

const Titulo = styled.Text<{ theme: AppTheme }>`
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;
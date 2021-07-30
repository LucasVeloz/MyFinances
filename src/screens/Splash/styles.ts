import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';


export const Container = styled(LinearGradient).attrs( ({ theme }) => ({
  colors: [theme.colors.primary, theme.colors.primary_lighterX3]
}))`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
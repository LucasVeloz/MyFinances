import styled from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import { BlurView } from "expo-blur";

export const Container = styled(BlurView).attrs({
  tint: 'dark',
  intencity: 100
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

export const Box = styled.View`
  width: 100%;
  height: 420px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 35px;

  align-items: center;
  justify-content: space-between;
  padding: 30px 20px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.titleBold};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  font-size: ${RFValue(32)}px;
`;

export const Icon = styled(MaterialCommunityIcons).attrs({
  name: 'check-circle'
})`
  font-size: 100px;
  color: ${({ theme}) => theme.colors.green};
`;
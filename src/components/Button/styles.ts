import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.colors.primary };
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme}) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.white};

`;
import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";

interface Props {
  isDisabled?: boolean;
}

export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  height: 60px;
  background: ${({ theme, isDisabled }) => (isDisabled ? theme.colors.darkGray : theme.colors.primary)};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const Title = styled.Text<Props>`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.titleBold};
  color: ${({ theme, isDisabled }) => (isDisabled ? theme.colors.disabled : theme.colors.white)};
`;

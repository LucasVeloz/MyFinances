import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Icon from '../../assets/svg/logo.svg';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.blue};
  `;

export const SubContainer = styled.View`
  flex: 1;
  padding: ${30 + getStatusBarHeight()}px 30px 0;
`;

export const EndContainer = styled.View`
  height: ${RFPercentage(45)}px;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  padding: 20px 20px ${getBottomSpace()}px;
  justify-content: space-evenly;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.titleBold};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  `;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: 10px;
  `;

export const GreetingText = styled(SubTitle)`
  text-align:  justify;
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Logo = styled(Icon)`
  height: 50px;
  width: 200px;
`;

export const Text = styled(SubTitle)`
  text-align: justify;
  color: ${({ theme }) => theme.colors.white};
`;

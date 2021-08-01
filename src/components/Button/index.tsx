import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  isDisabled?: boolean;
}

export const Button = ({ title, isDisabled = false, ...rest }: Props) => (
  <Container disabled={isDisabled} isDisabled={isDisabled} {...rest}>
    <Title isDisabled={isDisabled}>{title}</Title>
  </Container>
);

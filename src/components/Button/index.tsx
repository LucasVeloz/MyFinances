import React from 'react';
import { Container, Title } from './styles';

interface Props {
  title: string;
}

export const Button = ({ title, ...rest }: Props) => {
  return (
    <Container 
      {...rest}
    >
      <Title>{title}</Title>
    </Container>
  );
};
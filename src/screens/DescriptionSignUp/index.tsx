import React, { useState } from 'react';
import { SucessModal } from '../../components/SucessModal';
import { Container } from './styles';

export const DescriptionSignUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Container>
      <SucessModal visible={isVisible} title="conta criada com sucesso!" />
    </Container>
  );
};

import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import { Button } from '../../components/Button';

import {
  Container,
  SubTitle,
  Title,
  SubContainer,
  EndContainer,
  GreetingText,
  Logo,
  Text,
} from './styles';

export const DescriptionSignUp = () => {
  const titleEffect = useSharedValue(-500);
  const subEffect = useSharedValue(-500);
  const imgEffect = useSharedValue(0);
  const opacity = useSharedValue(0);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    titleEffect.value = withTiming(0, { duration: 1500 }, () => {
      subEffect.value = withTiming(0, { duration: 1000 }, () => {
        opacity.value = withTiming(1, { duration: 1000 });
        imgEffect.value = withRepeat(withTiming(1, { duration: 2000 }), 3);
      });
    });
  }, [titleEffect.value, subEffect.value, imgEffect.value, opacity.value]);

  setTimeout(() => setIsDisabled(false), 3000);

  const titleStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: titleEffect.value },
    ],
  }));

  const subStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: subEffect.value },
    ],
  }));

  return (
    <Container>
      <StatusBar translucent backgroundColor="transparent" style="light" />
      <SubContainer>
        <GreetingText>BEM-VINDO AO</GreetingText>
        <Animated.View style={[titleStyle]}>
          <Logo size={100} />
        </Animated.View>
        <Animated.View style={[subStyle, { marginTop: 10 }]}>
          <Text>
            Controle financeiro
            {' '}
            {'\n'}
            descomplicado
          </Text>
        </Animated.View>
      </SubContainer>
      <EndContainer>
        <View>
          <SubTitle>Controle seus gastos</SubTitle>
          <Title>
            Organize suas
            {'\n'}
            finanças com o
            {'\n'}
            método dos potes
          </Title>
        </View>
        <Button activeOpacity={0.8} title="Começar a economizar" isDisabled={isDisabled} />
      </EndContainer>
    </Container>
  );
};

import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import Logo from '../../assets/svg/logo.svg';
import Ilustration from '../../assets/svg/ilustrationLogo.svg';

import { Container } from './styles';

export const Splash = () => {
  const translateY = useSharedValue(0);
  const navigation = useNavigation();

  const goHome = () => {
    navigation.navigate('descriptionSignUp');
  };

  const imageStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    position: 'absolute',
  }));

  const ilustrationStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      translateY.value,
      [-30, -25, 0],
      [1, 0.5, 0],
      Extrapolate.CLAMP,
    ),
    transform: [
      {
        translateY: interpolate(
          translateY.value,
          [0, -50],
          [0, 90],
          Extrapolate.CLAMP,
        ),
      },
    ],
    position: 'absolute',
  }));

  useEffect(() => {
    translateY.value = withTiming(
      -50,
      {
        duration: 1000,
      },
      () => {
        'worklet';

        runOnJS(goHome)();
      },
    );
  }, []);

  return (
    <Container>
      <Animated.View style={imageStyle}>
        <Logo />
      </Animated.View>
      <Animated.View style={ilustrationStyle}>
        <Ilustration />
      </Animated.View>
    </Container>
  );
};

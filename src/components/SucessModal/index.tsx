import React, { useEffect } from 'react';
import { Modal } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import { Button } from '../Button';
import {
  Box,
  Container,
  Icon,
  Title,
} from './styles';

interface Props {
  title: string;
  visible: boolean;
  onRequestClose: () => void
}

export const SucessModal = ({
  title,
  visible,
  onRequestClose,
}: Props) => {
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 1000 });
  }, [opacity]);
  const iconStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [
      {
        rotate: `${interpolate(opacity.value, [0, 0.9], [0, 2160], Extrapolate.CLAMP)}deg`,
      },
    ],
  }));

  return (
    <Modal
      animationType="slide"
      onRequestClose={onRequestClose}
      transparent
      visible={visible}
    >
      <Container>
        <Box>
          <Title>{title}</Title>
          <Animated.View style={iconStyle}>
            <Icon />
          </Animated.View>
          <Button title="concluir" onPress={onRequestClose} />
        </Box>
      </Container>
    </Modal>
  );
};

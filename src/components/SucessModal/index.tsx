import React, { useEffect } from 'react';
import { Modal } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming, interpolate, Extrapolate } from 'react-native-reanimated';
import { Button } from '../Button';
import { Box, Container, Icon, Title } from './styles';

interface Props {
  title: string;
  visible: boolean;
}

export const SucessModal = ({ title, visible }: Props) => {
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(1, {duration: 1000})
  }, [])

  const iconStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    }
  })

  return (
    <Modal visible={visible}  >
      <Container>
        <Box>
          <Title>{title}</Title>
          <Animated.View style={[iconStyle, { alignItems: 'center'}]}>
            <Icon />
          </Animated.View>
          <Button title="concluir" />
        </Box>
      </Container>
    </Modal>
  );
};
import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { DescriptionSignUp } from '../screens/DescriptionSignUp';
import { Splash } from '../screens/Splash';

const { Navigator, Screen } = createStackNavigator();

export const SignUp = () => {
  return (
    <Navigator headerMode="none" screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS

    }}>
      <Screen name="splash" component={Splash} options={{
      }} />
      <Screen name="descriptionSignUp" options={{
        gestureEnabled: false,
        cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid
      }} component={DescriptionSignUp} />
    </Navigator>
  );
};
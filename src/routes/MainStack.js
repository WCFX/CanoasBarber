import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../views/Preload';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import MainTab from './MainTab';

const { Navigator, Screen } = createStackNavigator();

export default () => (
  <Navigator
    initialRouteName={Preload}
    screenOptions={{
      headerShown: false,
    }}
  >
    <Screen name="Preload" component={Preload} />
    <Screen name="SignIn" component={SignIn} />
    <Screen name="SignUp" component={SignUp} />
    <Screen
      options={{ headerShown: true }}
      name="MainTab"
      component={MainTab}
    />
  </Navigator>
);

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

export default () => (
  <Navigator>
    <Screen name="Preload" components={Preload} />
    <Screen name="SignIn" components={SigIn} />
    <Screen name="SignUp" components={SignUp} />
  </Navigator>
);

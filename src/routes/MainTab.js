import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../views/Home';
import Search from '../views/Search';
import Appointments from '../views/Appointments';
import Favorites from '../views/Favorites';
import Profile from '../views/Profile';

const { Navigator, Screen } = createBottomTabNavigator();

export default () => (
  <Navigator>
    <Screen name="Home" component={Home} />
    <Screen name="Search" component={Search} />
    <Screen name="Appointments" component={Appointments} />
    <Screen name="Favorites" component={Favorites} />
    <Screen name="Profile" component={Profile} />
  </Navigator>
);

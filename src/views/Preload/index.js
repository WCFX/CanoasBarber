import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import { Container, LoadingIcon } from './styles';

import BarberLogo from '../../assets/barber.svg';

const Preload = () => {
  const { navigate } = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        // VALIDAR TOKEN
      } else {
        navigate('SignIn');
      }
    };
    checkToken();
  }, []);

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <LoadingIcon size="large" color="#FFF" />
    </Container>
  );
};

export default Preload;

import React, { useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import { UserContext } from '../../context/UserContext';

import Api from '../../service/Api';

import { Container, LoadingIcon } from './styles';

import BarberLogo from '../../assets/barber.svg';

const Preload = () => {
  const { navigate } = useNavigation();
  const { dispatch: userDispatch } = useContext(UserContext);
  const { reset } = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        let res = await Api.checkToken(token);
        if (res.token) {
          await AsyncStorage.setItem('token', res.token);

          userDispatch({
            type: 'setAvatar',
            payload: {
              avatar: res.data.avatar,
            },
          });

          reset({
            routes: [{ name: 'MainTab' }],
          });
        } else {
          navigate('SignIn');
        }
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

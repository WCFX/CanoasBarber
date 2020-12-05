import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import { Container, UserInfoName } from './styles';

import Api from '../../service/Api';

const Barber = () => {
  const { navigate } = useNavigation();
  const { params } = useRoute();

  const [userInfo, setUserInfo] = useState({
    id: params.id,
    avatar: params.avatar,
    name: params.name,
    stars: params.stars,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getBarberInfo = async () => {
      setLoading(true);
      let json = await Api.getBarber(userInfo.id);
      if (json.error == '') {
        setUserInfo(json.data);
      } else {
        alert(`Erro : ${json.error}`);
      }
      setLoading(false);
    };
    getBarberInfo();
  }, []);

  return (
    <Container>
      <UserInfoName>Barbeiro : {userInfo.name} </UserInfoName>
    </Container>
  );
};

export default Barber;

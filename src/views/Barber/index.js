import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Container, Title } from './styles';

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

  useEffect(() => {
    const getBarberInfo = async () => {
      let json = await Api.getBarber(userInfo.id);
      if (json.error == '') {
        // SE NÃO ACONTECEU
      } else {
        alert(`Erro : ${json.error}`);
      }
    };
    getBarberInfo();
  }, []);

  return (
    <Container>
      <Title>Barbeiro : {userInfo.name} </Title>
    </Container>
  );
};

export default Barber;

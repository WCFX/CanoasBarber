import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, LogoutButton, LogoutButtonText } from './styles';

import Api from '../../service/Api';

const Profile = () => {
  const { reset } = useNavigation();

  const handleLogoutButton = async () => {
    await Api.logout();
    reset({
      routes: [{ name: 'SignIn' }],
    });
  };

  return (
    <Container>
      <Title>Profile</Title>
      <LogoutButton onPress={handleLogoutButton}>
        <LogoutButtonText>LOGOUT</LogoutButtonText>
      </LogoutButton>
    </Container>
  );
};

export default Profile;

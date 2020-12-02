import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  ButtonRedirect,
  ButtonRedirectText,
  Strong,
} from './styles';

import SignInput from '../../components/SignInput';
import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import PassIcon from '../../assets/lock.svg';

const SignIn = () => {
  const { navigate } = useNavigation();

  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  function handleNavigateToSignUp() {
    navigate('SignUp');
  }

  return (
    <Container>
      <BarberLogo width="100%" height="160" />

      <InputArea>
        <SignInput
          value={emailField}
          onChangeText={(t) => setEmailField(t)}
          placeholder="Digite o seu email"
          IconSvg={EmailIcon}
        />
        <SignInput
          value={passwordField}
          onChangeText={(t) => setPasswordField(t)}
          placeholder="Digite a sua senha"
          IconSvg={PassIcon}
          password
        />

        <CustomButton>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>

        <ButtonRedirect onPress={handleNavigateToSignUp}>
          <ButtonRedirectText>Ainda não possuí uma conta ?</ButtonRedirectText>
          <Strong>Cadastre-se</Strong>
        </ButtonRedirect>
      </InputArea>
    </Container>
  );
};

export default SignIn;

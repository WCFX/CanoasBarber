import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { UserContext } from '../../context/UserContext';

import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  ButtonRedirect,
  ButtonRedirectText,
  Strong,
} from './styles';

import Api from '../../service/Api';

import SignInput from '../../components/SignInput';
import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import PassIcon from '../../assets/lock.svg';

const SignIn = () => {
  const { dispatch: userDispatch } = useContext(UserContext);
  const { reset } = useNavigation();

  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleLoginButton = async () => {
    if (emailField != '' && passwordField != '') {
      let res = await Api.signIn(emailField, passwordField);
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
        alert('Email e/ou senha errados');
      }
    } else {
      alert('Preencha todos os campos');
    }
  };

  function handleNavigateToSignUp() {
    reset({
      routes: [{ name: 'SignUp' }],
    });
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
          autoCap="none"
        />
        <SignInput
          value={passwordField}
          onChangeText={(t) => setPasswordField(t)}
          placeholder="Digite a sua senha"
          IconSvg={PassIcon}
          password
        />

        <CustomButton onPress={handleLoginButton}>
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

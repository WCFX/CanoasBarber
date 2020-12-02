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

import Api from '../../service/Api';

import SignInput from '../../components/SignInput';

import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import PassIcon from '../../assets/lock.svg';
import UserIcon from '../../assets/person.svg';

const SignUp = () => {
  const { reset } = useNavigation();
  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleNewUser = async () => {
    if (nameField != '' && emailField != '' && passwordField != '') {
      let res = await Api.signUp(nameField, emailField, passwordField);
      if (res.token) {
        alert('Deu certo');
      } else {
        alert(`Erro: ${res.error}`);
      }
    } else {
      alert('Preencha os campos');
    }
  };

  function handleNavigateToSignIn() {
    reset({
      routes: [{ name: 'SignIn' }],
    });
  }

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <InputArea>
        <SignInput
          value={nameField}
          onChangeText={(t) => setNameField(t)}
          placeholder="Digite seu nome"
          IconSvg={UserIcon}
        />
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

        <CustomButton onPress={handleNewUser}>
          <CustomButtonText>CADASTRAR</CustomButtonText>
        </CustomButton>

        <ButtonRedirect onPress={handleNavigateToSignIn}>
          <ButtonRedirectText>Já possuí uma conta ?</ButtonRedirectText>
          <Strong>Acesse sua conta</Strong>
        </ButtonRedirect>
      </InputArea>
    </Container>
  );
};

export default SignUp;

import React from 'react';
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
import UserIcon from '../../assets/person.svg';

const SignUp = () => {
  const { goBack } = useNavigation();

  function handleGoBack() {
    goBack('');
  }

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <InputArea>
        <SignInput placeholder="Digite seu nome" IconSvg={UserIcon} />
        <SignInput placeholder="Digite o seu email" IconSvg={EmailIcon} />
        <SignInput placeholder="Digite a sua senha" IconSvg={PassIcon} />

        <CustomButton>
          <CustomButtonText>CADASTRAR</CustomButtonText>
        </CustomButton>

        <ButtonRedirect onPress={handleGoBack}>
          <ButtonRedirectText>Já possuí uma conta ?</ButtonRedirectText>
          <Strong>Acesse sua conta</Strong>
        </ButtonRedirect>
      </InputArea>
    </Container>
  );
};

export default SignUp;

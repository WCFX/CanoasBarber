import React from 'react';
import { Text } from 'react-native-svg';
import styled from 'styled-components/native';

export const InputArea = styled.View`
  width: 100%;
  height: 60px;
  background-color: #83d6e3;
  flex-direction: row;
  border-radius: 10px;
  padding-left: 15px;
  align-items: center;
  margin-bottom: 15px;
`;

const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #268596;
  margin-left: 20px;
`;

export default ({ IconSvg, placeholder }) => {
  return (
    <InputArea>
      <IconSvg width="24" height="24" fill="#268696" />
      <Input placeholder={placeholder} />
    </InputArea>
  );
};

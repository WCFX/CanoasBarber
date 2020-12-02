import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #63c2d1;
  justify-content: center;
  align-items: center;
`;
export const InputArea = styled.View`
  width: 60%;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;
export const SignInput = styled.TextInput`
  width: 100%;
  border: 1px solid rgba(16, 6, 92, 0.3);
  background-color: #72d8e8;
  border-radius: 10px;
  margin: 10px 0;
  text-align: center;
  font-size: 18px;
`;
export const CustomButton = styled.TouchableOpacity`
  width: 90%;
  margin: 20px 0 60px 0;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 10px;
  background-color: #4f3ed6;
`;
export const CustomButtonText = styled.Text`
  font-size: 18px;
  color: #f9f9f9;
`;
export const ButtonRedirect = styled.TouchableOpacity``;
export const ButtonRedirectText = styled.Text`
  font-size: 16px;
`;
export const Strong = styled.Text`
  margin-top: 6px;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  text-decoration: underline;
`;

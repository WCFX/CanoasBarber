import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 22;
`;
export const LogoutButton = styled.TouchableOpacity`
  width: 300px;
  height: 50px;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  background-color: #ccc;
  border-radius: 8px;
`;
export const LogoutButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

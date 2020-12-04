import React, { useContext } from 'react';
import styled from 'styled-components/native';

import { UserContext } from '../context/UserContext';

import HomeIcon from '../assets/home.svg';
import SearchIcon from '../assets/search.svg';
import TodayIcon from '../assets/today.svg';
import FavoriteIcon from '../assets/favorite.svg';
import AccountIcon from '../assets/account.svg';

const TabArea = styled.View`
  height: 60px;
  background-color: #4eadbe;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const TabItem = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 35px;
  border: 3px solid #4eadbe;
  margin-bottom: 20px;
`;

const AvatarIcon = styled.Image`
  width: 24px;
  height: 24px;
  border-radius: 24px;
`;

export default ({ state, navigation }) => {
  const { state: user } = useContext(UserContext);

  const handleNavigateTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem onPress={() => handleNavigateTo('Home')}>
        <HomeIcon
          style={{ opacity: state.index === 0 ? 1 : 0.5 }}
          width="28"
          height="28"
          fill="#FFF"
        />
      </TabItem>

      <TabItem onPress={() => handleNavigateTo('Search')}>
        <SearchIcon
          style={{ opacity: state.index === 1 ? 1 : 0.5 }}
          width="28"
          height="28"
          fill="#FFF"
        />
      </TabItem>

      <TabItemCenter onPress={() => handleNavigateTo('Appointments')}>
        <TodayIcon width="32" height="32" fill="#4eadbe" />
      </TabItemCenter>

      <TabItem onPress={() => handleNavigateTo('Favorites')}>
        <FavoriteIcon
          style={{ opacity: state.index === 3 ? 3 : 0.5 }}
          width="28"
          height="28"
          fill="#FFF"
        />
      </TabItem>

      <TabItem onPress={() => handleNavigateTo('Profile')}>
        {user.avatar != '' ? (
          <AvatarIcon source={{ uri: user.avatar }} />
        ) : (
          <AccountIcon
            style={{ opacity: state.index === 4 ? 4 : 0.5 }}
            width="28"
            height="28"
            fill="#FFF"
          />
        )}
      </TabItem>
    </TabArea>
  );
};

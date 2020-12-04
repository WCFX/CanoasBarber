import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationInput,
  LocationFinder,
} from './styles';

import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';

const Home = () => {
  const { navigate } = useNavigation();
  const [locationText, setLocationText] = useState('');

  function handleNavigateToSearch() {
    navigate('Search');
  }

  return (
    <Container>
      <Scroller>
        <HeaderArea>
          <HeaderTitle>Encontre o seu {'\n'}barbeiro favorito.</HeaderTitle>
          <SearchButton>
            <SearchIcon width="26" height="26" fill="#FFF" />
          </SearchButton>
        </HeaderArea>
        <LocationArea>
          <LocationInput
            placeholder="Me informe onde você está"
            placeholderTextColor="#ddd"
            value={locationText}
            onChangeText={setLocationText}
            onPress={handleNavigateToSearch}
          />
          <LocationFinder>
            <MyLocationIcon width="24" height="24" fill="#FFF" />
          </LocationFinder>
        </LocationArea>
      </Scroller>
    </Container>
  );
};

export default Home;

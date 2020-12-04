import React, { useState } from 'react';
import Platform from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationInput,
  LocationFinder,
  LoadingIcon,
} from './styles';

import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';

const Home = () => {
  const { navigate } = useNavigation();
  const [locationText, setLocationText] = useState('');
  const [coordinate, setCoordinate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  function handleNavigateToSearch() {
    navigate('Search');
  }

  async function handleLocationFinder() {
    setCoordinate(null);
    let result = await request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
    );
    if (result == 'granted') {
      setLoading(true);
      setLocationText('');
      setList([]);

      Geolocation.getCurrentPosition((info) => {
        setCoordinate(info.coordinate);
        getBarbers();
      });
    }
  }

  async function getBarbers() {}

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
          <LocationFinder onPress={handleLocationFinder}>
            <MyLocationIcon width="24" height="24" fill="#FFF" />
          </LocationFinder>
        </LocationArea>
        {loading && <LoadingIcon size="large" color="#FFF" />}
      </Scroller>
    </Container>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
import { Platform, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import Api from '../../service/Api';
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
  ListArea,
} from './styles';
import BarberItem from '../../components/BarberItem';
import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';

const Home = () => {
  const { navigate } = useNavigation();
  const [locationText, setLocationText] = useState('');
  const [coordinate, setCoordinate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const handleNavigateToSearch = () => {
    navigate('Search');
  };

  const handleLocationFinder = async () => {
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
  };

  const getBarbers = async () => {
    setLoading(true);
    setList([]);

    let res = await Api.getBarbers();
    if (res.error == '') {
      if (res.loc) {
        setLocationText(res.loc);
      }
      setList(res.data);
    } else {
      alert(`ERROR: ${res.error}`);
    }
    setLoading(false);
  };

  useEffect(() => {
    getBarbers();
  }, []);

  const onRefresh = () => {
    setRefreshing(false);
    getBarbers();
  };

  return (
    <Container>
      <Scroller
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <HeaderArea>
          <HeaderTitle>Encontre o seu {'\n'}barbeiro favorito.</HeaderTitle>
          <SearchButton onPress={handleNavigateToSearch}>
            <SearchIcon width="26" height="26" fill="#FFF" />
          </SearchButton>
        </HeaderArea>
        <LocationArea>
          <LocationInput
            placeholder="Me informe onde você está"
            placeholderTextColor="#ddd"
            value={locationText}
            onChangeText={(t) => setLocationText(t)}
          />
          <LocationFinder onPress={handleLocationFinder}>
            <MyLocationIcon width="24" height="24" fill="#FFF" />
          </LocationFinder>
        </LocationArea>
        {loading && <LoadingIcon size="large" color="#FFF" />}

        <ListArea>
          {list.map((item, index) => (
            <BarberItem key={index} data={item} />
          ))}
        </ListArea>
      </Scroller>
    </Container>
  );
};

export default Home;

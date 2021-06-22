import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import Loading from './Loading';
import Weather from './Weather';

const API_KEY = '834ce6e2cb2c3bcb16da5e9648548884';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [temp, setTemp] = useState();
  const [condition, setCondition] = useState('Clear');

  useEffect(() => {
    const getWeather = async (latitude, longitude) => {
      const {
        data: {
          main: { temp },
          weather,
        },
      } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
      );
      setCondition(weather[0].main);
      setIsLoading(false);
      setTemp(temp);
    };

    (async () => {
      try {
        // 사용자 location 권한을 체크함.
        await Location.requestForegroundPermissionsAsync();
        // 사용자 location 정보를 가져옴.
        const {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync();
        await getWeather(latitude, longitude);

        setIsLoading(false);
      } catch (error) {
        Alert.alert(`Can't find you.`, `So sad`);
      }
    })();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Weather condition={condition} temp={Math.round(temp)} />
  );
};

export default App;

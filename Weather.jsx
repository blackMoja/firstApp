import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Haze: {
    iconName: 'weather-hail',
    gradient: ['#4da0b0', '#d39d38'],
    title: '안개',
    subTitle: `기존의 안개와는 좀 다르죠.`,
  },
  Drizzle: {
    iconName: 'weather-hail',
    gradient: ['#89f7fe', '#66a6ff'],
    title: '이슬비',
    subTitle: '사랑비',
  },
  Rain: {
    iconName: 'weather-rainy',
    gradient: ['#00c6eb', '#005bea'],
    title: '비',
    subTitle: '가 내리다 말다.',
  },
  Snow: {
    iconName: 'weather-snowy',
    gradient: ['#7de2fc', '#b9b6e5'],
    title: '눈',
    subTitle: '내려요~',
  },
  Atmosphere: {
    iconName: 'weather-hail',
    gradient: ['#89f7fe', '#66a6ff'],
    title: '대기',
    subTitle: '좋아요',
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#ff7300', '#fef253'],
    title: '맑음',
    subTitle: '많이 맑아요~',
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#d7d2cc', '#304352'],
    title: '구름',
    subTitle: '많이 흐립니다.',
  },
  Mist: {
    iconName: 'weather-hail',
    gradient: ['#4da0b0', '#d39d38'],
    title: '안개',
    subTitle: '안전운전 하세용',
  },
  Dust: {
    iconName: 'weather-hail',
    gradient: ['#4da0b0', '#d39d38'],
    title: '미세먼지',
    subTitle: '마스크는 필수~',
  },
};

const Weather = ({ temp, condition }) => {
  console.log('condition', condition);
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subTitle}>
          {weatherOptions[condition].subTitle}
        </Text>
      </View>
    </LinearGradient>
  );
};
Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    'Thunderstorm',
    'Drizzle',
    'Rain',
    'Snow',
    'Atmosphere',
    'Clear',
    'Clouds',
    'Mist',
    'Dust',
    'Haze',
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    fontSize: 42,
    color: 'white',
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 42,
    fontWeight: '300',
    color: 'white',
    marginBottom: 10,
  },
  subTitle: {
    fontWeight: '600',
    fontSize: 24,
    color: 'white',
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
});

export default Weather;

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const baseValue = height > width ? height / 10 : width / 10;

const THEME = {
  FONT_SIZE: {
    p1: baseValue / 4,
    p2: baseValue / 3.6,
    p3: baseValue / 3.2,
    h1: baseValue / 1.6,
    h2: baseValue / 2,
    h3: baseValue / 2.2,
  }
};

export default THEME;
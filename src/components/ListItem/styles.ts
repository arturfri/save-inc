import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  contianer: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {
    fontFamily: 'ReemKufyBold',
    color: 'rgba(60, 60, 60, 1)',
  },
  detail: {
    fontFamily: 'ReemKufyBold',
  },
  description: {
    fontFamily: 'ReemKufy',
    color: 'rgba(140, 140, 140, 1)',
  }
});
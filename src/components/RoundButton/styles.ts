import { StyleSheet } from 'react-native';
import { colors } from '../../assets/colors';
import THEME from '../../utils/theming';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.third,
    borderRadius: 5,
    marginVertical: 10,
    shadowColor: 'rgba(220, 220, 220, 0.6)',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 3,
  },
  text: {
    fontFamily: 'ReemKufyBold',
    color: '#fff',
    fontSize: THEME.FONT_SIZE.p2,
  }
});
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 10,
    width: '100%',
    marginVertical: 5,
    // borderWidth: 1,
    // borderColor: colors.second,
    elevation: 3,
    // shadowColor: colors.second,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  label: {
    fontFamily: 'ReemKufyBold',
    fontSize: 12,
    color: 'gray',
    marginTop: 2,
  },
  value: {
    margin: 5,
    fontSize: 16,
  }
});
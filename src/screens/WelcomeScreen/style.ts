import {theme} from '@Shared/theme';
import {StyleSheet} from 'react-native';
import {ms, mvs} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: theme.colors.primary_bg,
    flex: 1,
    justifyContent: 'space-between',
  },
  centerText: {
    textAlign: 'center',
  },
  subTextContainer: {
    marginTop: mvs(20),
    marginHorizontal: ms(60),
  },
  bottomContent: {
    marginHorizontal: 35,
    marginBottom: mvs(40),
  },
  buttonLabelStyle: {
    fontWeight: '800',
    fontSize: ms(15),
  },
  buttonStyle: {
    padding: 5,
  },
  signInBtnContainerStyle: {
    marginTop: 20,
  },
});

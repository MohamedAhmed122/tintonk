import {StyleSheet} from 'react-native';
import {FontFamilyType} from '@Shared/theme/fonts';
import {ms, mvs} from 'react-native-size-matters';
export const styles = StyleSheet.create({
  h1Style: {
    fontFamily: FontFamilyType.Bold,
    fontSize: ms(28),
    lineHeight: mvs(34),
  },
  h2Style: {
    fontFamily: FontFamilyType.Bold,
    fontSize: ms(24),
    lineHeight: mvs(30),
  },
  h3Style: {
    fontFamily: FontFamilyType.Medium,
    fontSize: ms(16),
    lineHeight: mvs(20),
  },
  pStyle: {
    fontFamily: FontFamilyType.Regular,
    fontSize: ms(16),
    lineHeight: mvs(20),
  },
  subtitle1Style: {
    fontFamily: FontFamilyType.Regular,
    fontSize: ms(14),
    lineHeight: mvs(18),
  },
  subtitle2Style: {
    fontFamily: FontFamilyType.Light,
    fontSize: ms(14),
    lineHeight: mvs(18),
  },
});

import {StyleSheet} from 'react-native';
import {FontFamilyType} from '@Shared/theme/fonts';
import {ms, mvs} from 'react-native-size-matters';
export const styles = StyleSheet.create({
  h1Style: {
    fontFamily: FontFamilyType.Bold,
    fontSize: ms(34),
    lineHeight: mvs(40),
  },
  h2Style: {
    fontFamily: FontFamilyType.Bold,
    fontSize: ms(28),
    lineHeight: mvs(34),
  },
  h3Style: {
    fontFamily: FontFamilyType.Bold,
    fontSize: ms(24),
    lineHeight: mvs(30),
  },
  pStyle: {
    fontFamily: FontFamilyType.Medium,
    fontSize: ms(16),
    lineHeight: mvs(20),
  },
  subtitle1Style: {
    fontFamily: FontFamilyType.Regular,
    fontSize: ms(16),
    lineHeight: mvs(20),
  },
  subtitle2Style: {
    fontFamily: FontFamilyType.Regular,
    fontSize: ms(14),
    lineHeight: mvs(18),
  },
});

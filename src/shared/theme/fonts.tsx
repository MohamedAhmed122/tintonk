import {configureFonts} from 'react-native-paper';

export enum FontFamilyType {
  Regular = 'OpenSans-Regular',
  Bold = 'OpenSans-Bold',
  Light = 'OpenSans-Light',
  Medium = 'OpenSans-Medium',
  Italic = 'OpenSans-Italic',
}

export const fonts = configureFonts({
  config: {
    fontFamily: FontFamilyType.Regular,
  },
});

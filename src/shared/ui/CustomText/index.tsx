import React from 'react';

import {StyleProp, Text, TextProps, TextStyle} from 'react-native';
import {styles} from './style';

enum FontType {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  p = 'p',
  subtitle1 = 'subtitle1',
  subtitle2 = 'subtitle2',
}

interface CustomTextProps extends Omit<TextProps, 'style'> {
  fontType?: 'h1' | 'h2' | 'h3' | 'p' | 'subtitle1' | 'subtitle2';
  color?: string;
  textStyle?: StyleProp<TextStyle>;
}

export const CustomText: React.FC<CustomTextProps> = ({
  fontType,
  color,
  textStyle,
  ...props
}) => {
  return (
    <Text
      style={[
        fontType === FontType.h1 && styles.h1Style,
        fontType === FontType.h2 && styles.h2Style,
        fontType === FontType.h3 && styles.h3Style,
        fontType === FontType.p && styles.pStyle,
        fontType === FontType.subtitle1 && styles.subtitle1Style,
        fontType === FontType.subtitle2 && styles.subtitle2Style,
        textStyle,
        {color},
      ]}
      {...props}
    />
  );
};

import React from 'react';
import {Text, TextProps} from 'react-native-paper';

export const PaperText: React.FC<TextProps> = ({...props}) => {
  return <Text {...props} />;
};

import React from 'react';
import {Text, TextProps} from 'react-native-paper';

interface PaperTextProps extends TextProps {}

export const PaperText: React.FC<PaperTextProps> = ({...props}) => {
  return <Text {...props} />;
};

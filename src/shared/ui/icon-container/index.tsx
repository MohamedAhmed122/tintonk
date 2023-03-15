import {
  ViewStyle,
  StyleProp,
  StyleSheet,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {s} from 'react-native-size-matters';
import {theme} from '@Shared/theme';

enum VariantType {
  Contained = 'contained',
  Outlined = 'outlined',
}

interface IconContainerProps extends Omit<TouchableOpacityProps, 'style'> {
  variant?: 'contained' | 'outlined';
  containerStyle?: StyleProp<ViewStyle>;
}

export const IconContainer: React.FC<IconContainerProps> = ({
  variant = VariantType.Contained,
  containerStyle,
  ...otherProps
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.basicStyle,
        variant === VariantType.Contained && styles.containedCover,
        variant === VariantType.Outlined && styles.outlinedCover,
        containerStyle,
      ]}
      {...otherProps}
    />
  );
};

const styles = StyleSheet.create({
  basicStyle: {
    width: s(40),
    height: s(40),
    borderRadius: s(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  containedCover: {
    width: s(50),
    height: s(50),
    borderRadius: s(25),
    backgroundColor: theme.colors.secondary,
  },
  outlinedCover: {
    borderWidth: 1,
    borderColor: theme.colors.light_purple,
  },
});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import useNavigationHeader from '@Shared/hooks/useNavigationHeader';
import {theme} from '@Shared/theme';

import {ms} from 'react-native-size-matters';

import {HeaderBack} from '@Shared/ui';

export const PhoneAuthScreen = () => {
  useNavigationHeader({
    header: () => <HeaderBack />,
  });
  return (
    <View style={styles.screen}>
      <Text>PhoneAuthScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.primary_bg,
  },
  headerContainer: {
    marginLeft: ms(18),
  },
});

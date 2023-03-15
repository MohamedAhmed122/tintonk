import React from 'react';
import {View} from 'react-native';
import {Button as PaperButton} from 'react-native-paper';
import {theme} from '@Shared/theme';
import {CustomText} from '@Shared/ui';
import {styles} from './style';
import {AuthNavigationType, AuthParams} from '@Navigation/index';

export const WelcomeScreen = ({
  navigation,
}: {
  navigation: AuthNavigationType;
}) => {
  const onPressSignIn = () =>
    navigation.navigate(AuthParams.PhoneAuthentication);

  return (
    <View style={styles.screen}>
      <View>{/* Image should come here */}</View>
      <View>
        <CustomText fontType="h1" textStyle={styles.centerText}>
          Make friends with the people you like
        </CustomText>
        <View style={styles.subTextContainer}>
          <CustomText fontType="subtitle2" textStyle={styles.centerText}>
            interact with people with the same interest you like
          </CustomText>
        </View>
      </View>
      <View style={styles.bottomContent}>
        <PaperButton
          mode="contained"
          textColor={theme.colors.white}
          buttonColor={theme.colors.secondary}
          labelStyle={styles.buttonLabelStyle}
          contentStyle={styles.buttonStyle}>
          Continue
        </PaperButton>
        <View style={styles.signInBtnContainerStyle}>
          <PaperButton
            mode="contained"
            onPress={onPressSignIn}
            textColor={theme.colors.white}
            buttonColor={theme.colors.primary}
            labelStyle={styles.buttonLabelStyle}
            contentStyle={styles.buttonStyle}>
            Sign In
          </PaperButton>
        </View>
      </View>
    </View>
  );
};

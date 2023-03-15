import {StyleProp, StyleSheet, View, ViewProps, ViewStyle} from 'react-native';
import React from 'react';
import {IconContainer} from '../icon-container';
import {theme} from '@Shared/theme';
import {ms, mvs} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

interface HeaderBackProps extends Omit<ViewProps, 'style'> {
  containerStyle?: StyleProp<ViewStyle>;
}

export const HeaderBack: React.FC<HeaderBackProps> = ({containerStyle}) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View style={[styles.headerBack, containerStyle]}>
      <View style={[{marginTop: mvs(12) + top}, styles.headerContainer]}>
        <IconContainer variant="outlined" onPress={navigation.goBack}>
          <Entypo
            name="chevron-small-left"
            size={30}
            color={theme.colors.black}
          />
        </IconContainer>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginLeft: ms(18),
  },
  headerBack: {
    backgroundColor: theme.colors.primary_bg,
  },
});

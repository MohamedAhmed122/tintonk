import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function useNavigationHeader({header}: {header: React.FC}) {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header,
    });
  }, [navigation, header]);
}

import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabParamList} from './type';
import {TAB_HEIGHT, tabs} from './tabs';
import {ms, mvs} from 'react-native-size-matters';
import {theme} from '@Shared/theme';

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: theme.colors.white,
        tabBarInactiveTintColor: theme.colors.lemonade,
      }}>
      {tabs.map(tab => (
        <Tab.Screen
          key={tab.id}
          name={tab.name}
          component={tab.component}
          options={tab.options}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    left: ms(20),
    right: ms(20),
    bottom: mvs(30),
    height: TAB_HEIGHT,
    borderRadius: 45,
  },
});

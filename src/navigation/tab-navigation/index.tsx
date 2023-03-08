import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabParamList} from './type';
import {tabs} from './tabs';

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
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
    borderRadius: 20,
  },
});

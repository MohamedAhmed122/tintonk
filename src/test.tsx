import {Button, Text, View} from 'react-native';
import React from 'react';

import {
  HomeNavigationType,
  HomeParams,
} from './navigation/home-navigation/type';
import {TabNavigationType, TabParams} from './navigation/tab-navigation/type';
import {
  AppNavigationParams,
  AppNavigationType,
} from './navigation/app-navigation/type';
import {AuthParams} from './navigation/auth-navigation/type';
import {DrawerParams} from './navigation/Drawer-navigation/type';

// Auth Navigation -->
export function LoginScreen({navigation}: {navigation: AppNavigationType}) {
  return (
    <View style={{paddingTop: 50}}>
      <Text>LoginScreen</Text>
      <Button
        title="Navigate to Register"
        onPress={() =>
          navigation.navigate(AppNavigationParams.Auth, {
            screen: AuthParams.Register,
          })
        }
      />
      <Button
        title="Navigate to VideoList"
        onPress={() =>
          navigation.navigate(AppNavigationParams.Tab, {
            screen: TabParams.Drawer,
            params: {
              screen: DrawerParams.CameraDrawer,
            },
          })
        }
      />
    </View>
  );
}

export function RegisterScreen() {
  return (
    <View style={{paddingTop: 50}}>
      <Text>RegisterScreen</Text>
    </View>
  );
}

// Home Navigation  with Example of navigate in the same stack-->
export function HomeScreen({navigation}: {navigation: HomeNavigationType}) {
  return (
    <View style={{paddingTop: 50}}>
      <Text>HomeScreen</Text>

      <Button
        title="Navigate to VideoList"
        onPress={() => navigation.navigate(HomeParams.VideoList)}
      />
    </View>
  );
}

export function VideoListScreen() {
  return (
    <View style={{paddingTop: 50}}>
      <Text>VideoListScreen</Text>
    </View>
  );
}

// Chat Navigation   with Example of navigate in the diff stack & in the same tab-->
export function ChatScreen({navigation}: {navigation: TabNavigationType}) {
  return (
    <View style={{paddingTop: 50}}>
      <Text>ChatScreen</Text>
      <Button
        title="Navigate to VideoList"
        onPress={() =>
          navigation.navigate(TabParams.Home, {screen: HomeParams.VideoList})
        }
      />
    </View>
  );
}

export function ChatListScreen() {
  return (
    <View style={{paddingTop: 50}}>
      <Text>ChatListScreen</Text>
    </View>
  );
}

// Profile Navigation -->
export function ProfileScreen() {
  return (
    <View style={{paddingTop: 50}}>
      <Text>ProfileScreen</Text>
    </View>
  );
}

export function ProfileDetailsScreen() {
  return (
    <View style={{paddingTop: 50}}>
      <Text>ProfileDetailsScreen</Text>
    </View>
  );
}

// Match Navigation -->
export function MatchScreen() {
  return (
    <View style={{paddingTop: 50}}>
      <Text>MatchScreen</Text>
    </View>
  );
}

export function MatchDetailsScreen() {
  return (
    <View style={{paddingTop: 50}}>
      <Text>MatchDetailsScreen</Text>
    </View>
  );
}

// Notification Navigation -->
export function NotificationScreen() {
  return (
    <View style={{paddingTop: 50}}>
      <Text>NotificationDetailsScreen</Text>
    </View>
  );
}

// Camera Navigation -->
export function CameraScreen() {
  return (
    <View style={{paddingTop: 50}}>
      <Text>CameraDetailsScreen</Text>
    </View>
  );
}

// Record Navigation -->
export function RecordScreen() {
  return (
    <View style={{paddingTop: 50}}>
      <Text>RecordDetailsScreen</Text>
    </View>
  );
}

import {Button, Text, View, StyleSheet} from 'react-native';

import React from 'react';

import {
  AppNavigationParams,
  AppNavigationType,
  AuthParams,
  DrawerParams,
  HomeNavigationType,
  HomeParams,
  TabNavigationType,
  TabParams,
  navigationService,
} from './navigation';
import {PaperText} from '@Shared/ui';

// Auth Navigation -->
export function LoginScreen({navigation}: {navigation: AppNavigationType}) {
  return (
    <View style={styles.container}>
      <PaperText variant="titleSmall">Display Large </PaperText>
      <Button
        title="Navigate to Register"
        onPress={() =>
          navigationService.navigate(AppNavigationParams.Auth, {
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
    <View style={styles.container}>
      <Text>RegisterScreen</Text>
    </View>
  );
}

// Home Navigation  with Example of navigate in the same stack-->
export function HomeScreen({navigation}: {navigation: HomeNavigationType}) {
  return (
    <View style={styles.container}>
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
    <View style={styles.container}>
      <Text>VideoListScreen</Text>
    </View>
  );
}

// Chat Navigation   with Example of navigate in the diff stack & in the same tab-->
export function ChatScreen({navigation}: {navigation: TabNavigationType}) {
  return (
    <View style={styles.container}>
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
    <View style={styles.container}>
      <Text>ChatListScreen</Text>
    </View>
  );
}

// Profile Navigation -->
export function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
    </View>
  );
}

export function ProfileDetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>ProfileDetailsScreen</Text>
    </View>
  );
}

// Match Navigation -->
export function MatchScreen() {
  return (
    <View style={styles.container}>
      <Text>MatchScreen</Text>
    </View>
  );
}

export function MatchDetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>MatchDetailsScreen</Text>
    </View>
  );
}

// Notification Navigation -->
export function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Text>NotificationDetailsScreen</Text>
    </View>
  );
}

// Camera Navigation -->
export function CameraScreen() {
  return (
    <View style={styles.container}>
      <Text>CameraDetailsScreen</Text>
    </View>
  );
}

// Record Navigation -->
export function RecordScreen() {
  return (
    <View style={styles.container}>
      <Text>RecordDetailsScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
});

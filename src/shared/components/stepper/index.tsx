import React from 'react';
import {View} from 'react-native';
import {styles} from './style';

interface StepperProps {
  current: number;
  steps?: number;
}

export const Stepper: React.FC<StepperProps> = ({current, steps = 5}) => {
  return (
    <View style={styles.container}>
      {[...Array(steps).keys()].map(step => (
        <View
          key={step}
          style={[styles.row, current >= step && styles.currentStep]}
        />
      ))}
    </View>
  );
};

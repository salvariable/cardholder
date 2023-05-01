import React from 'react';
import {Button} from 'react-native';

export const Button = () => {
  return (
    <Button
      onPress={() => console.log('pressed')}
      title="Learn More"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
  );
};

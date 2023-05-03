import React from 'react';
import {Text, View} from 'react-native';

export const DetailsHeader = ({title}) => {
  return (
    <View
      style={{
        height: 130,
        backgroundColor: '#CFD6FF',
        padding: 20,
        justifyContent: 'flex-end',
      }}>
      <Text
        style={{
          fontWeight: '800',
          fontSize: 24,
          color: '#000000',
        }}>
        {title}
      </Text>
    </View>
  );
};

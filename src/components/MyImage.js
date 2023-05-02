import React from 'react';
import {Text, Image, View} from 'react-native';

const thumbnail =
  'https://www.shutterstock.com/image-vector/profile-sign-user-thumbnail-icon-260nw-1915203964.jpg';

export const MyImage = ({size, source = thumbnail}) => {
  return (
    <View>
      <Image
        source={{uri: source}}
        style={{
          width: size,
          height: size,
          margin: 8,
          borderRadius: size / 4
        }}
      />
    </View>
  );
};

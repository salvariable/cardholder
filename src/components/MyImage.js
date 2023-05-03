import React from 'react';
import {Image} from 'react-native';

const thumbnail =
  'https://www.shutterstock.com/image-vector/profile-sign-user-thumbnail-icon-260nw-1915203964.jpg';

export const MyImage = ({size, source = thumbnail}) => {
  return (
    <Image
      source={{uri: source}}
      style={{
        width: size,
        height: size,

        borderRadius: size > 60 ? 0 : 10,
      }}
    />
  );
};

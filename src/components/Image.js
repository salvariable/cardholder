import React from 'react';
import {Text, Image, View} from 'react-native';

const thumbnail = 'https://as1.ftcdn.net/v2/jpg/03/58/54/86/1000_F_358548675_OWiuGttT2nV4HcJknRO4WWfKLDa8e29s.jpg'

export const Image = ({size, source = thumbnail}) => {
  return (
    <View>
      <Text>
        <Image source={{ uri: source}} />
      </Text>
    </View>
  );
};

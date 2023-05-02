import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {MyImage} from './MyImage';
import {useNavigation} from '@react-navigation/native';

export const MovementItem = item => {
  const {product, createdAt, points, image, isRedemption} = item;
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details', {item})}>
      <View style={styles.container}>
        <MyImage size={50} source={image} />
        <View>
          <Text style={styles.title}>{product}</Text>
          <Text>{createdAt}</Text>
        </View>
        <View style={styles.container}>
          <Text>
            {isRedemption ? '+' : '-'}
            {points}
          </Text>
        </View>
        <View>
          <Text>Icon</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

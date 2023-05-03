import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {MyImage} from './MyImage';
import dayjs from 'dayjs';
import 'dayjs/locale/es'; // import Spanish locale

export const MovementItem = item => {
  const {product, createdAt, points, image, is_redemption} = item;
  const navigation = useNavigation();

  const date = dayjs(createdAt).locale('es').format('DD [de] MMMM, YYYY');

  return (
    <TouchableOpacity
      testID="movement-item-touchable"
      onPress={() => navigation.navigate('Details', {item})}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <MyImage size={55} source={image} testID={'movement-item-image'} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title} testID="movement-item-product">
            {product}
          </Text>
          <Text style={styles.date} testID="movement-item-date">
            {date}
          </Text>
        </View>
        <View style={styles.pointsContainer}>
          <Text
            testID="movement-item-points-indicator"
            style={[
              styles.points,
              is_redemption ? styles.negative : styles.positive,
            ]}>
            {is_redemption ? '-' : '+'}
          </Text>
          <Text
            style={[styles.points, styles.neutral]}
            testID="movement-item-points">
            {points}
          </Text>
          <Icon name="chevron-right" size={40} color="#070707" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  imageContainer: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    marginRight: 16,
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
  },
  title: {
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 19,
    color: '#000000',
  },
  date: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: '#000000',
  },
  points: {
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 22,
  },
  positive: {
    color: '#00B833',
  },
  negative: {
    color: '#FF0000',
  },
  neutral: {
    color: '#000000',
  },
});

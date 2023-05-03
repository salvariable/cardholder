import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const MainCard = ({points}) => {
  const cleanPoints = points.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <View style={styles.container}>
      <Text style={styles.issued}>Diciembre</Text>
      <Text style={styles.amount}>{cleanPoints} pts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#334FFA',
    width: 286,
    height: 143,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    elevation: 4,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  issued: {
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 22,
    color: '#FFFFFF',
    position: 'absolute',
    top: 21,
    left: 19,
  },
  amount: {
    fontWeight: '800',
    fontSize: 32,
    lineHeight: 44,
    color: '#FFFFFF',
  },
});

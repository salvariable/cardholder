import React from 'react';
import {Text, View} from 'react-native';

export const MainCard = () => {
  return (
    <View>
      <Text style={styles.issued}>Diciembre</Text>
      <Text style={styles.amount}>10,000.00 pts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  issued: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 10,
  },
  amount: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
});
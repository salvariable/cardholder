import React from 'react';
import {Text, View} from 'react-native';
import {Image} from './Image';

export const MovementItem = () => {
  return (
    <View style={styles.container}>
      <Image />
      <View>
        <Text style={styles.title}>Nombre del producto</Text>
        <Text>26 de enero, 2019</Text>
      </View>
      <View style={styles.container}>
        <Text>+100</Text>
      </View>
      <View>
        <Text>Icon</Text>
      </View>
    </View>
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

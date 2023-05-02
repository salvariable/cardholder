import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MyImage} from '../components/MyImage';
import {MyButton} from '../components/MyButton';
import {useNavigation} from '@react-navigation/native';

export const Details = props => {
  const navigation = useNavigation();
  const {item} = props.route.params;
  const {product, createdAt, image, points} = item;

  useEffect(() => {
    props.navigation.setOptions({title: product});
  });

  return (
    <View style={styles.container}>
      <MyImage size={100} source={image} />

      <Text style={styles.subtitle}>Detalles del producto:</Text>
      <Text>Comprado el {createdAt}</Text>

      <Text style={styles.subtitle}>Con esta compra acumulaste</Text>
      <Text>{points} puntos</Text>

      <MyButton
        title="Aceptar"
        onPress={() => navigation.navigate('Dashboard')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
});

import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {MainCard} from '../components/MainCard';
import useFetchProducts from '../hooks/getProducts';
import {MovementsList} from '../components/MovementsList';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Dashboard = () => {
  const {products, loading} = useFetchProducts();

  const totalPoints = products.reduce((acc, curr) => {
    return !curr.is_redemption && acc + curr.points;
    // return !curr.is_redemption ? acc + curr.points : acc - curr.points;
  }, 0);

  loading && <ActivityIndicator size="large" color="#0000ff" />;

  return (
    <SafeAreaView style={[styles.container, styles.spacing]}>
      <Text style={styles.title}>¡Bienvenido de vuelta!</Text>
      <Text style={styles.name}>Ruben Rodríguez</Text>

      <Text style={styles.subtitle}>TUS PUNTOS</Text>
      <MainCard points={totalPoints} />

      <Text style={styles.subtitle}>TUS MOVIMIENTOS</Text>
      <View style={styles.container}>
        <MovementsList data={products} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spacing: {
    padding: 20,
  },
  title: {
    fontWeight: '800',
    fontSize: 20,
    lineHeight: 27,
    color: '#020202',
  },
  name: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21.86,
    color: '#020202',
  },
  subtitle: {
    paddingVertical: 20,
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 19,
    color: '#9B9898',
  },
});

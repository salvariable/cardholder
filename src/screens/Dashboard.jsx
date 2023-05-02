import React, {useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {MyButton} from '../components/MyButton';
import {MainCard} from '../components/MainCard';
import {MovementItem} from '../components/MovementItem';
import {MOVEMENTS} from '../../assets/movements';
import useFetchProducts from '../hooks/getProducts';

export const Dashboard = () => {
  const {products, loading} = useFetchProducts();

  loading && <ActivityIndicator size="large" color="#0000ff" />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido de vuelta!</Text>
      <Text>Ruben Rodríguez</Text>

      <Text style={styles.subtitle}>TUS PUNTOS</Text>
      <MainCard />

      <Text style={styles.subtitle}>TUS MOVIMIENTOS</Text>
      <FlatList
        data={products}
        renderItem={({item}) => <MovementItem {...item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{flex: 1, paddingBottom: 16}}
      />

      <View style={styles.footer}>
        <MyButton title="Ganados" />
        <MyButton title="Canjeados" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

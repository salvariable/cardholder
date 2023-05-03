import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MyButton} from '../components/MyButton';
import {useNavigation} from '@react-navigation/native';
import dayjs from 'dayjs';
import 'dayjs/locale/es'; // import Spanish locale
import {SafeAreaView} from 'react-native-safe-area-context';
import {DetailsHeader} from '../components/DetailsHeader';
import {MyImage} from '../components/MyImage';

export const Details = props => {
  const navigation = useNavigation();
  const {item} = props.route.params;
  const {product, createdAt, image, points} = item;

  const date = dayjs(createdAt).locale('es').format('DD [de] MMMM, YYYY');

  useEffect(() => {
    props.navigation.setOptions({
      headerBackVisible: false,
      header: () => <DetailsHeader title={product} />,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          padding: 24,
          elevation: 4,
          shadowColor: '#000000',
          shadowOffset: {width: 0, height: 4},
          shadowOpacity: 0.5,
          shadowRadius: 4,
        }}>
        <MyImage size={200} source={image} />
      </View>

      <View style={{flex: 0, marginBottom: 24}}>
        <Text style={styles.subtitle}>Detalles del producto:</Text>
        <Text style={styles.date}>Comprado el {date}</Text>

        <Text style={styles.subtitle}>Con esta compra acumulaste</Text>
        <Text style={styles.points}>{points} puntos</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 24,
          marginHorizontal: -8,
        }}>
        <MyButton
          title="Aceptar"
          onPress={() => navigation.navigate('Dashboard')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  subtitle: {
    paddingVertical: 20,
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 19,
    color: '#9B9898',
  },
  date: {
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 22,
    color: '#000000',
  },
  points: {
    fontWeight: '800',
    fontSize: 24,
    lineHeight: 33,
    color: '#020202',
  },
});

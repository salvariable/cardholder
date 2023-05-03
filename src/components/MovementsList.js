import React, {useState} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {MovementItem} from './MovementItem';
import {MyButton} from './MyButton';

export const MovementsList = ({data}) => {
  const [filter, setFilter] = useState(null);

  const filteredData =
    filter === null ? data : data.filter(item => item.is_redemption === filter);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.container}>
          <FlatList
            testID={'movements-list-flatlist'}
            data={filteredData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <MovementItem {...item} />}
          />
        </View>
      </View>
      {(filter === null || filter === true || filter === false) && (
        <View style={styles.filterContainer}>
          {filter !== null && (
            <MyButton
              title="Todos"
              testID={'movements-list-button-all'}
              onPress={() => setFilter(null)}
            />
          )}
          {filter === null && (
            <View style={styles.buttonGroup}>
              <MyButton
                title="Ganados"
                testID={'movements-list-button-earned'}
                onPress={() => setFilter(false)}
              />
              <MyButton
                title="Canjeados"
                testID={'movements-list-button-redeemed'}
                onPress={() => setFilter(true)}
              />
            </View>
          )}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: -10,
    marginTop: 36,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

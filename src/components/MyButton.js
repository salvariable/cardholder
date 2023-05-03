import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export const MyButton = ({title, onPress}) => {
  const smallButton = title === 'Ganados' || title === 'Canjeados';

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={[styles.text, smallButton ? styles.small : styles.regular]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 17,
    backgroundColor: '#334FFA',
    borderRadius: 10,
    marginHorizontal: 8,
  },
  text: {
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  small: {
    fontSize: 12,
    lineHeight: 16,
  },
  regular: {
    fontSize: 16,
    lineHeight: 22,
  },
});

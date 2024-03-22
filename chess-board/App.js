import React from 'react';
import { View, StyleSheet } from 'react-native';

const Square = ({ color }) => {
  return <View style={[styles.square, { backgroundColor: color }]} />;
};

const Chessboard = () => {
  const renderRow = (rowIndex) => {
    const colors = ['white', 'black'];
    return Array(8)
      .fill()
      .map((_, columnIndex) => (
        <Square key={columnIndex} color={colors[(rowIndex + columnIndex) % 2]} />
      ));
  };

  return (
    <View style={styles.container}>
      {Array(8)
        .fill()
        .map((_, index) => (
          <View key={index} style={styles.row}>
            {renderRow(index)}
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: 40,
    height: 40,
  },
});

export default Chessboard;

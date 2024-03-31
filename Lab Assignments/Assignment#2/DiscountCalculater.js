
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet } from 'react-native';

const DiscountCalculator = () => {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [savings, setSavings] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [history, setHistory] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const calculateDiscount = () => {
    if (originalPrice && discountPercentage) {
      const price = parseFloat(originalPrice);
      const discount = parseFloat(discountPercentage);
      const savedAmount = (price * discount) / 100;
      const finalPrice = price - savedAmount;
      setSavings(savedAmount.toFixed(2));
      setFinalPrice(finalPrice.toFixed(2));

      // Add calculation to history
      const calculation = `${price} - ${discount}% = ${finalPrice}`;
      setHistory([...history, calculation]);
    }
  };

  const clearInputs = () => {
    setOriginalPrice('');
    setDiscountPercentage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Discount Calculator</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Original Price"
          keyboardType="numeric"
          value={originalPrice}
          onChangeText={(text) => setOriginalPrice(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Discount Percentage"
          keyboardType="numeric"
          value={discountPercentage}
          onChangeText={(text) => setDiscountPercentage(text)}
        />
      </View>
      <Button title="Calculate" onPress={calculateDiscount} />
      <Text style={styles.result}>You Save: ${savings}</Text>
      <Text style={styles.result}>Final Price: ${finalPrice}</Text>
      <Button title="Clear" onPress={clearInputs} />
      <Button title="View History" onPress={() => setModalVisible(true)} />

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeading}>Calculation History</Text>
          {history.map((calculation, index) => (
            <Text key={index} style={styles.historyText}>{calculation}</Text>
          ))}
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    width: '45%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  result: {
    fontSize: 18,
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  modalHeading: {
    fontSize: 20,
    marginBottom: 20,
  },
  historyText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default DiscountCalculator;

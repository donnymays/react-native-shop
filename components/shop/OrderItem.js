import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import CartItem from './CartItem';
import Colors from '../../constants/Colors'

const OrderItem = props => {
  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.amount}>{props.amount.toFixed(2)}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <Button color={Colors.primaryColor} title="Show Details" />
    </View>
  );
};

export default OrderItem

const styles = StyleSheet.create({
  orderItem: {
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "white",
    margin: 20,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center'
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  amount: {
    fontSize: 16
  },
  date: {
    fontSize: 16,
    color: '#888'
  },
});

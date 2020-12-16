import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

const CartScreen = props => {
  return (
    <View>
      <View>
        <Text>Total: $</Text>
        <Button title='Order Now' />
      </View>
      <View>
        <Text>Cart Stuff</Text>
      </View>
      
    </View>
  )
}

export default CartScreen;

const styles = StyleSheet.create({})

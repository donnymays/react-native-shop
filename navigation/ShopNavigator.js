import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from  '../constants/Colors';
import { Platform } from 'react-native';
import ProductsDetailScreen from '../screens/shop/ProductsDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import { Ionicons } from '@expo/vector-icons';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}

const ProductsNavigator = createStackNavigator({
  ProductsOverview: ProductsOverviewScreen,
  ProductDetail: ProductsDetailScreen,
  Cart: CartScreen
}, {
  navigationOptions: {
    drawerIcon: drawerConfig =>
      <Ionicons 
        name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
        size={23}
        color={drawerConfig.tintColor}
      />
  }, 
  defaultNavigationOptions: defaultNavOptions 
});

const OrdersNavigator = createStackNavigator({
  Orders: OrdersScreen
}, { 
  navigationOptions: {
    drawerIcon: drawerConfig =>
      <Ionicons 
        name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
        size={23}
        color={drawerConfig.tintColor}
      />
  },
  defaultNavigationOptions: defaultNavOptions 
});

const AdminNavigator = createStackNavigator({
  UserProducts: UserProductsScreen
}, { 
  navigationOptions: {
    drawerIcon: drawerConfig =>
      <Ionicons 
        name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
        size={23}
        color={drawerConfig.tintColor}
      />
  },
  defaultNavigationOptions: defaultNavOptions 
});

const ShopNavigator = createDrawerNavigator ({
  Products: ProductsNavigator,
  Orders: OrdersNavigator,
  Admin: AdminNavigator
}, {
  contentOptions: {
    activeTintColor: Colors.primaryColor
  }
})

export default createAppContainer(ShopNavigator);
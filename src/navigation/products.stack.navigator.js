import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from '../constants/color';
import { Ionicons } from '@expo/vector-icons';
import ProductsOverviewScreen, {
    screenOptions as productsOverviewScreenOptions
} from '../screens/shop/products-overview.screen';

import ProductDetailScreen, {
    screenOptions as productDetailScreenOptions
} from "../screens/shop/product-detaill.screen";

import CartScreen, {
    screenOptions as cartScreenOptions
} from "../screens/shop/cart.screen";

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const ProductsStack = createStackNavigator();

const ProductsStackNavigator = (props) => {

    return (
        <ProductsStack.Navigator screenOptions={defaultNavOptions}>
            <ProductsStack.Screen
                name={'products-overView'}
                component={ProductsOverviewScreen}
                options={productsOverviewScreenOptions}
            />
            <ProductsStack.Screen
                name={'product-detail'}
                component={ProductDetailScreen}
                options={productDetailScreenOptions}
            />
            <ProductsStack.Screen
                name={'cart-screen'}
                component={CartScreen}
                options={cartScreenOptions}
            />
        </ProductsStack.Navigator>
    )
}

export default ProductsStackNavigator;
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import ProductsOverviewScreen, {
    screenOptions as productsOverviewScreenOptions
} from '../screens/shop/products-overview.screen';

import Colors from '../constants/color'

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
        </ProductsStack.Navigator>
    )
}

export default ProductsStackNavigator;
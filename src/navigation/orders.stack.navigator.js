import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

import Colors from "../constants/color";
import OrdersScreen, {
    screenOptions as ordersScreenOptions
} from "../screens/shop/orders.screen";

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

const OrdersStackNavigator = createStackNavigator();

const OrdersNavigator = () => {
    return (
        <OrdersStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <OrdersStackNavigator.Screen
                name="Orders"
                component={OrdersScreen}
                options={ordersScreenOptions}
            />
        </OrdersStackNavigator.Navigator>
    );
};

export default OrdersNavigator;


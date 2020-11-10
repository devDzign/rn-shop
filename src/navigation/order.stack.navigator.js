import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import OrderScreen from "../screens/shop/order.screen";
import Colors from "../constants/color";

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

const OrderNavigator = () => {
    return (
        <OrdersStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <OrdersStackNavigator.Screen
                name="Orders"
                component={OrderScreen}
                // options={ordersScreenOptions}
            />
        </OrdersStackNavigator.Navigator>
    );
};

export default OrderNavigator;


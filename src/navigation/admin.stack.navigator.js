import React from 'react';

import {createStackNavigator} from "@react-navigation/stack";
import Colors from "../constants/color";
import UserProductsScreen from "../screens/user/user-products.screen";
import EditProductScreen from "../screens/user/edit-product.screen";
const AdminStackNavigator = createStackNavigator();


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

const AdminNavigator = () => {
    return (
        <AdminStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <AdminStackNavigator.Screen
                name="UserProducts"
                component={UserProductsScreen}
                // options={userProductsScreenOptions}
            />
            <AdminStackNavigator.Screen
                name="EditProduct"
                component={EditProductScreen}
                // options={editProductScreenOptions}
            />
        </AdminStackNavigator.Navigator>
    );
}

export default AdminNavigator;

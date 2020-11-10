import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ProductsStackNavigator from "./products.stack.navigator";

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <ProductsStackNavigator />
        </NavigationContainer>
    );
};


export default RootNavigator;
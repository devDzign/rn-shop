import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ShopDrawerNavigator from "./shop-drawer.navigation";


const RootNavigator = () => {
    return (
        <NavigationContainer>
            <ShopDrawerNavigator/>
        </NavigationContainer>
    );
};


export default RootNavigator;
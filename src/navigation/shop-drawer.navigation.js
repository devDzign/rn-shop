import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { MaterialIcons } from "@expo/vector-icons";
import ProductsStackNavigator from "./products.stack.navigator";

import OrderNavigator from "./orders.stack.navigator";

const Drawer = createDrawerNavigator();

const drawerNavigatorOptions = {
    activeTintColor: '#e91e63',
    labelStyle:{
        fontFamily: 'open-sans-bold',
        display: 'flex',
        flex:1,
        marginLeft: -15
    }
};

const ShopDrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContentOptions={drawerNavigatorOptions}
        >
            <Drawer.Screen
                name="home-tab-nav"
                component={ProductsStackNavigator}
                options={
                    {
                        drawerLabel: 'Products',
                        drawerIcon: ({ color, size }) => (
                            <MaterialIcons
                                name="store"
                                size={24}
                                color={color}
                            />
                        )
                    }
                }
            />
            <Drawer.Screen
                name="filters-nav"
                component={OrderNavigator}
                options={
                    {
                        title: 'Orders',
                        drawerIcon: ({ color, size }) => (
                            <MaterialIcons
                                name="settings"
                                size={24}
                                color={color}
                            />
                        )
                    }
                }
            />
        </Drawer.Navigator>
    );
};


export default ShopDrawerNavigator;

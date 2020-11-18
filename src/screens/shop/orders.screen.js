import React from 'react';

import { Text, FlatList, StyleSheet, Platform } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/ui/custom-header-button.ui.component";
import { useSelector } from "react-redux";


const OrdersScreen = () => {
    const orders = useSelector(state => state.orders.orders);

    const renderItemOrder = ({item}) => {
        return (
            <Text>{item.totalAmount.toFixed(2)}</Text>
        )
    }

    return (
        <FlatList
            data={orders}
            keyExtractor={item => item.id}
            renderItem={renderItemOrder}
        />
    );
};

const styles = StyleSheet.create({});

export default OrdersScreen;

export const screenOptions = navData => {
    return {
        headerTitle: 'Your Orders',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        ),
    };
};

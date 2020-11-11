import React from 'react';

import { FlatList, Text, View, StyleSheet, Platform, Image } from 'react-native';
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from '../../components/ui/custom-header-button.ui.component';
import ProductItem from "../../components/shop/product-item.component";


const ProductsOverviewScreen = (props) => {

    const products = useSelector(state => state.products.availableProducts)
    const renderItemHandler= ({item}) => {

        return (
            <ProductItem
                image={item.imageUrl}
                title={item.title}
                price={item.price}
                onViewDetail={() => {
                    props.navigation.navigate('product-detail', {product: item})
                }}
                onAddToCart={() => {}}
            />

        )
    }
    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={renderItemHandler}
        />
    );
};

export const screenOptions = navData => {
    return {
        headerTitle: 'All Products',
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
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Cart"
                    iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                    onPress={() => {
                        navData.navigation.navigate('Cart');
                    }}
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tinyLogo: {
            width: '100%',
            height: 200,
    }
});

export default ProductsOverviewScreen;

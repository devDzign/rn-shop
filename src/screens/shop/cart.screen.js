import React from 'react';

import { Text, View, StyleSheet, FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import Colors from '../../constants/color'
import CartItem from "../../components/shop/cart-item.components";
import { removeFromCart } from "../../store/cart/cart.actions";
import { addOrder } from "../../store/order/order.actions";

const CartScreen = (props) => {

    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    const dispatch = useDispatch();

    const cartItems = useSelector(state => {
        const transformedCartItems = [];
        for (const key in state.cart.items) {
            transformedCartItems.push({
                id: key,
                title: state.cart.items[key].title,
                price: state.cart.items[key].price,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum,
            })
        }

        return transformedCartItems.sort((a,b) => {
            return a.id > b.id ? 1 :  -1;
        })
    })



    const renderItemHandler = ({item}) => {

        return (
            <CartItem
                quantity={item.quantity}
                title={item.title}
                amount={item.sum}
                onRemove={() => {
                    dispatch(removeFromCart(item))
                }}
            />
        )
    }

    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>
                    Total: <Text style={styles.amount}>{cartTotalAmount.toFixed(2)} €</Text>
                </Text>
                <Button
                    style={Colors.accent}
                    title={"OrderNow"}
                    disabled={cartItems.length === 0}
                    onPress={()=> {
                        dispatch(addOrder(cartItems, cartTotalAmount))
                    }}
                />
            </View>
            <FlatList
                data={cartItems}
                keyExtractor={item => item.id}
                renderItem={renderItemHandler}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        margin: 20,
    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    summaryText: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    },
    amount: {
        color: Colors.primary
    },
});

export const screenOptions = navData => {
    return {
        headerTitle: 'Cart'
    };
};

export default CartScreen;

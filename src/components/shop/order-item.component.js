import React, { useState } from 'react';
import {Button, Text, View, StyleSheet } from 'react-native';
import Colors from '../../constants/color';
import CartItem from "./cart-item.components";

const OrderItem = ({order}) => {

    const [showDetails, setShowDetails] = useState(false);

    return (
        <View style={styles.orderItem}>
            <View style={styles.summary}>
                <Text style={styles.totalAmount}>{order.totalAmount.toFixed(2)}</Text>
                <Text style={styles.date}>{order.readableDate}</Text>
            </View>
           <Button
               color={Colors.primary}
               title="Show Details"
               onPress={() => {
                   setShowDetails(prevState => !prevState);
               }}
           />
            {showDetails && (
                <View style={styles.detailItems}>
                    {order.items.map(cartItem => (
                        <CartItem
                            key={cartItem.id}
                            quantity={cartItem.quantity}
                            amount={cartItem.sum}
                            title={cartItem.title}
                        />
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    orderItem: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 20,
        padding: 10
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    totalAmount:{
        fontFamily: 'open-sans-bold',
        fontSize:16
    },
    date:{
       fontSize: 16,
       fontFamily: 'open-sans',
        color: '#000'
    },
    detailItems: {
        width: '100%'
    }

});

export default OrderItem;

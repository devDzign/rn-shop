import { orderTypes } from './order.types'


export const addOrder = (cartItems, totalAmount) => {
    return {
        type: orderTypes.ADD_ORDER,
        payload: {
             items: cartItems,
            amount: totalAmount
        }
    }
}


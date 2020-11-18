import { cartTypes } from './cart.types'


export const addToCart = product => {
    return {
        type: cartTypes.ADD_TO_CART,
        payload: {
             product: product
        }
    }
}


export const removeFromCart = product => {
    return {
        type: cartTypes.REMOVE_FROM_CART,
        payload: {
            productId: product.id
        }
    }
}

export const resetCart = () => {
    return {
        type: cartTypes.RESET_CART,
    }
}

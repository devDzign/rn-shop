import PRODUCTS from "../../utils/dummy-data";
import { cartTypes } from "./cart.types";
import CartItem from "../../models/cart-item";

const initialState = {
    items: {},
    totalAmount: 0
}

const CartReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case cartTypes.ADD_TO_CART:
            const addedProduct = actions.payload.product;
            const productPrice = addedProduct.price;
            const productTitle = addedProduct.title;

            if (state.items[addedProduct.id]) {
                // item already exit in cart
                const newProductSum = state.items[addedProduct.id].sum ;
                const newProductQuantity = state.items[addedProduct.id].quantity +1 ;
                const updateCartItem = new CartItem(
                    newProductQuantity,
                    productPrice,
                    productTitle,
                    newProductSum + productPrice
                )

                return {
                    ...state,
                    items: {...state.items, [addedProduct.id]: updateCartItem},
                    totalAmount: state.totalAmount + productPrice
                }
            }

            const newCartItem = new CartItem(1, productPrice, productTitle, productPrice)

            return {
                ...state,
                items: {...state.items, [addedProduct.id]: newCartItem},
                totalAmount: state.totalAmount + productPrice
            }

    }
    return state;
}

export default CartReducer;
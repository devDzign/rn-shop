import { combineReducers } from "redux";
import ProductsReducer from "./products/products.reducer";
import CartReducer from "./cart/cart.reducer";
import OrderReducer from "./order/order.reducer";


const rootReducer = combineReducers(
    {
        products: ProductsReducer,
        cart: CartReducer,
        orders: OrderReducer
    }
)

export default rootReducer
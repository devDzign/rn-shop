import { combineReducers } from "redux";
import ProductsReducer from "./products/products.reducer";
import CartReducer from "./cart/cart.reducer";


const rootReducer = combineReducers(
    {
        products: ProductsReducer,
        cart: CartReducer
    }
)

export default rootReducer
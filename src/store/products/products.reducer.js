import PRODUCTS from "../../utils/dummy-data";

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(product => product.ownerId === 'u1')
}

const ProductsReducer = ( state = initialState, actions) => {
    return state;
}

export default ProductsReducer;
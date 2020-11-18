import { orderTypes } from "./order.types";
import Order from "../../models/order";


const initialState = {
    orders: []
}

const OrderReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case orderTypes.ADD_ORDER:

            const newOrder = new Order(
                new Date().toString(),
                actions.payload.items,
                actions.payload.amount,
                new Date()
            );

            return {
                ...state,
                orders: state.orders.concat(newOrder)
            };
    }

    return state;
}

export default OrderReducer;
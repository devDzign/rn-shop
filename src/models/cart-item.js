class CartItem {
    quantity;
    price;
    title;
    sum;


    constructor(quantity, price, title, sum) {
        this.quantity = quantity;
        this.price = price;
        this.title = title;
        this.sum = sum;
    }
}

export default CartItem;
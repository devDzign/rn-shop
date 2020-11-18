class Order {

  id;
  items;
  totalAmount;
  date;

  constructor(id, items, totalAmount, date) {
    this.id = id;
    this.items = items;
    this.totalAmount = totalAmount;
    this.date = date;

  }
}

export default Order;

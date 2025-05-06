class Shop {
  id; // number
  name; // string
  type; // string
  inventory; // [] of items

  constructor(shopObject) {
    this.id = shopObject.id || null;
    this.name = shopObject.name;
    this.type = shopObject.type;
    this.inventory = shopObject.inventory;
  }

  sell(itemId, qty) {}
}

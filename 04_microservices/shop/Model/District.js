class Shop {
  id; // number
  name; // string
  type; // string
  shops; // [] of Shop

  constructor(districtObject) {
    this.id = districtObject.id || null;
    this.name = districtObject.name;
    this.type = districtObject.type;
    this.shops = districtObject.shops;
  }
}

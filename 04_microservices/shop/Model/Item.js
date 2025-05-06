class Item {
  id; // number
  name; // string
  type; // string
  model; // string
  durability; // number
  durabilityMax; // number

  constructor(districtObject) {
    this.id = districtObject.id || null;
    this.name = districtObject.name;
    this.type = districtObject.type;
    this.model = districtObject.model;
    this.durability = districtObject.durability;
    this.durabilityMax = districtObject.durabilityMax;
  }
}

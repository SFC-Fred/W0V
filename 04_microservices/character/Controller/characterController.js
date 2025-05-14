import Character from "../Model/Character.js";

const character = new Character({
  id: 1,
  name: "Boba Goldwin",
  charClass: "warrior",
  pv: 10,
  strength: 10,
  dexterity: 10,
  intelligence: 10,
  inventory: [],
  equipedItems: [],
  purse: 1000000,
});

const characterController = {
  get() {
    return character;
  },
  validateGoldForPurchase(item) {
    return character.purse > item.cost;
  },
};

export default characterController;

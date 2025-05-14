const templateCharacter = {
  id: null,
  name: "",
  charClass: "",
  pv: 0,
  strength: 0,
  dexterity: 0,
  intelligence: 0,
  inventory: [],
  equipedItems: [],
  purse: 0,
};
const characterKeys = Object.keys(templateCharacter);

class Character {
  id;
  name;
  charClass;
  pv;
  strength;
  dexterity;
  intelligence;
  inventory;
  equipedItems;
  purse;

  constructor(jsonifiedCharacter) {
    this.id = jsonifiedCharacter.id || null;
    this.name = jsonifiedCharacter.name;
    this.charClass = jsonifiedCharacter.charClass;
    this.pv = jsonifiedCharacter.pv;
    this.strength = jsonifiedCharacter.strength;
    this.dexterity = jsonifiedCharacter.dexterity;
    this.intelligence = jsonifiedCharacter.intelligence;
    this.inventory = jsonifiedCharacter.inventory;
    this.equipedItems = jsonifiedCharacter.equipedItems;
    this.purse = jsonifiedCharacter.purse;
  }

  validate(requestObject) {
    let objKeys = Object.keys(requestObject);

    for (let index = 0; index < characterKeys.length; index++) {
      const key = array[index];
      if (!objKeys.includes(key)) {
        return false;
      }
    }

    return true;
  }

  buyItem(items) {
    // choose an item in the list and buys it
    // X Valider qu'on a assez d'or
    // X observedItem.cost

    let item = items[0]; // Math.random()

    if (this.isRichEnough(item.cost)) {
      this.inventory.push(item);
      this.purse -= item.cost;
      return item;
    }
    return null;
  }

  isRichEnough(itemCost) {
    return this.purse > itemCost;
  }
}

export default Character;

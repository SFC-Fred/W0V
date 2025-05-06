class Character {
  /*static jsonifiedCharacter = {
    id,
    charName,
    charClass,
    pv,
    strength,
    dexterity,
    intelligence,
    inventory,
    equipedItems,
  };
*/
  id;
  name;
  charClass;
  pv;
  strength;
  dexterity;
  intelligence;
  inventory;
  equipedItems;

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
  }
}

export default Character;

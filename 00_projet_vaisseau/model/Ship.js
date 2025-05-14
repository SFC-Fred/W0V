import ShipModel from "./CharacterModel.js";

class Ship {
  id;
  name;
  className;
  pv;
  strength;
  dexterity;
  intelligence;
  inventory;
  equipedItems;

  constructor(jsonifiedCharacter) {
    // Simple convertion
    this._id = jsonifiedCharacter.id || jsonifiedCharacter._id || null;
    this.name = jsonifiedCharacter.name;
    this.className = jsonifiedCharacter.className || "pégu";
    this.pv = jsonifiedCharacter.pv || 10;
    this.strength = jsonifiedCharacter.strength || 10;
    this.dexterity = jsonifiedCharacter.dexterity || 10;
    this.intelligence = jsonifiedCharacter.intelligence || 10;

    // complicatedConversion
    this.inventory = jsonifiedCharacter.inventory || [];
    this.equipedItems = jsonifiedCharacter.equipedItems || {}; // MModel: Sting, app_model: JSON object
  }
  static fetch(id, callback) {
    return CharacterModel.findById(id); // je m'attends que ca retourne : un character || null || une erreur
  }

  getId() {
    return this._id;
  }

  equipItem(item, slot) {
    if (!item.isEquipable()) {
      throw new Error("cant equip the item");
    }
    if (item.slotType != slot) {
      throw new Error("cant equip the item in this slot");
    }

    // TODO : do something
  }

  save(responseHandler) {
    let parsedCharacter = { ...this, _id: this.id, id: undefined };

    CharacterModel.create(parsedCharacter)
      .then((character) => {
        let resChar = new Character(character);
        responseHandler(200, resChar, null);
        console.log("J'ai sauvegarder");
      })
      .catch((err) => {
        responseHandler(500, null, err);
      });
  }

  remove(callback) {
    CharacterModel.deleteOne({ _id: this.id })
      .then((deletedCharacter) => {
        let resChar = new Character(deletedCharacter);
        callback(200, resChar, null);
      })
      .catch((err) => {
        callback(500, null, err);
      });
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      className: this.className,
      pv: this.pv,
      strength: this.strength,
      dexterity: this.dexterity,
      intelligence: this.intelligence,
      inventory: undefined,
      equipedItems: undefined,
    };
  }

  getInventory() {}
}

export default Character;
// Class

// ?

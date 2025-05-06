import Character from "./Character.js";
import characterModel from "./characterModel.js";

const characterController = {
  list() {
    let charList = [];
    characterModel.list().forEach((c) => {
      charList.push(new Character(c));
    });
    return charList;
  },
  get(id) {
    if (isNaN(id)) {
      return {};
    }
    return new Character(characterModel.get(Number(id)));
  },
  update(jsonCharacter) {
    // validate the character
    let char = new Character(jsonCharacter);

    return characterModel.save(char);
  },
  delete(id) {
    // validate rights and if thing exists
    return characterModel.remove(id);
  },
};

export default characterController;

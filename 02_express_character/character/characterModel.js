import utils from "../utils/utils.js";

const characterFilePath = "./data/characters.json";

const characterModel = {
  list() {
    return JSON.parse(utils.readFile(characterFilePath));
  },
  get(characterId) {
    let chars = JSON.parse(utils.readFile(characterFilePath));
    return chars.find((c) => c.id === characterId);
  },
  save(character) {
    let charList = this.list();

    if (character.id) {
      let charIdx = charList.findIndex((c) => c.id === character.id);
      charList.splice(charIdx, 1, character);
    } else {
      let newId = charList.sort((a, b) => b.id - a.id)[0].id + 1;
      character.id = newId;
      charList.push(character);
    }

    return utils.writeFile(
      characterFilePath,
      charList.sort((a, b) => a.id - b.id)
    );
  },
  remove(characterId) {
    let charList = this.list();
    let charIdx = charList.findIndex((c) => c.id === characterId);

    if (charIdx) {
      charList.splice(charIdx, 1);
      return utils.writeFile(characterFilePath, charList);
    }

    return "The char did not exist";
  },
};

export default characterModel;

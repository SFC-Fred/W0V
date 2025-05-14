// fonctionnalité en lien avec le model

import { Types } from "mongoose";
import Character from "../model/Character.js";
import CharacterModel from "../model/CharacterModel.js";

// fonctionnalité disponibles au client

function parseCharacterId(id) {
  let characterId = null;
  let err = null;

  if (!id) {
    err = "characterId is not an id";
    return { characterId, err };
  }
  characterId = new Types.ObjectId(String(id));
  return { characterId, err };
}

function responseHandler(res) {
  return (statusCode, jsonObject, err) => {
    if (err) {
      res.status(statusCode).send(err);
      return;
    }
    res.status(statusCode).json(jsonObject);
  };
}

const CharacterController = {
  getAll: (req, res) => {
    CharacterModel.find()
      .then((chars) => {
        let response = [];
        chars.forEach((c) => {
          response.push(new Character(c).toJSON());
        });
        res.status(200).json(response);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  getById: (req, res) => {
    let { characterId, err } = parseCharacterId(req?.params?.characterId);
    if (err) {
      res.status(400).send(err);
      return;
    }
    Character.fetch(characterId)
      .then((char) => {
        if (!char) {
          res.status(404).send("Character not found");
          return;
        }

        let resChar = new Character(char); // CharacterView
        res.status(200).json(resChar.toJSON());
      })
      .catch((err) => {
        res.status(500).send(err);
        console.log(err);
      });
  },

  create: (req, res) => {
    if (!req.body) {
      res.status(400).send("a character is required");
      return;
    }

    let c = new Character(req.body);

    c.save(responseHandler(res));
  },
  removeById: (req, res) => {
    let { characterId, err } = parseCharacterId(req?.params?.characterId);

    if (err) {
      res.status(400).send(err);
      return;
    }

    let c = new Character({ id: characterId });
    c.remove(responseHandler(res));
  },
};
export default CharacterController;

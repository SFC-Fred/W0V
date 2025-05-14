import mongoose from "mongoose";

// schema

const characterSchema = new mongoose.Schema({
  _id: mongoose.SchemaTypes.ObjectId,
  name: String,
  className: String,
  pv: Number,
  strength: Number,
  dexterity: Number,
  intelligence: Number,
  inventory: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Item" }],
  equipedItems: {
    head: { type: mongoose.SchemaTypes.ObjectId, ref: "Item" },
    lHand: { type: mongoose.SchemaTypes.ObjectId, ref: "Item" },
    rHand: { type: mongoose.SchemaTypes.ObjectId, ref: "Item" },
    body: { type: mongoose.SchemaTypes.ObjectId, ref: "Item" },
    legs: { type: mongoose.SchemaTypes.ObjectId, ref: "Item" },
    boots: { type: mongoose.SchemaTypes.ObjectId, ref: "Item" },
  },
});

const CharacterModel = mongoose.model("Character", characterSchema);

export default CharacterModel;

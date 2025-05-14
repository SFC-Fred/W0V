import mongoose from "mongoose";

const ShipSchema = new mongoose.Schema({
  _id: mongoose.SchemaTypes.ObjectId,
  name: String,
  className: String,
  type: String,
  baseSpeed: Number,
  baseHealth: Number,
  health: Number,
  componnentSlots: {
    thruster: { type: mongoose.SchemaTypes.ObjectId, ref: "Componnent" },
    hull: { type: mongoose.SchemaTypes.ObjectId, ref: "Componnent" },
    shield: { type: mongoose.SchemaTypes.ObjectId, ref: "Componnent" },
    engine: { type: mongoose.SchemaTypes.ObjectId, ref: "Componnent" },
    // other: { type: mongoose.SchemaTypes.ObjectId, ref: "Componnent" },
  },
});

const ShipModel = mongoose.model("Ship", ShipSchema);

export default ShipModel;

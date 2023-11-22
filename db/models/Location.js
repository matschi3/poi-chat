import mongoose from "mongoose";

const Schema = mongoose.Schema;

const locationSchema = new Schema({
  uuid: { type: String, required: true },
});

const Location =
  mongoose.models.Location || mongoose.model("Location", locationSchema);

export default Location;

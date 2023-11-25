import mongoose from "mongoose";

const Schema = mongoose.Schema;

const locationSchema = new Schema({
  uuid: { type: String, required: true },
  geometry: { type: [Schema.Types.ObjectId], ref: "Geometry" },
  adress: { type: [Schema.Types.ObjectId], ref: "Adress" },
  hint: { type: String, required: false },
});

const Location =
  mongoose.models.Location || mongoose.model("Location", locationSchema);

export default Location;

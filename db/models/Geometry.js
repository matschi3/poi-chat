import mongoose from "mongoose";

const Schema = mongoose.Schema;

const geometrySchema = new Schema({
  uuid: { type: String, required: true },
  type: { type: String, required: true },
  coordinates: { type: [Array], required: true },
});

const Geometry =
  mongoose.models.Geometry || mongoose.model("Geometry", geometrySchema);

export default Geometry;

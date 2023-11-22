import mongoose from "mongoose";

const Schema = mongoose.Schema;

const propertySchema = new Schema({
  uuid: { type: String, required: true },
});

const Property =
  mongoose.models.Property || mongoose.model("Property", propertySchema);

export default Property;

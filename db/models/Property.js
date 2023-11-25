import mongoose from "mongoose";

const Schema = mongoose.Schema;

const propertySchema = new Schema({
  uuid: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  seating: { type: Number, required: true },
  seatingBackrest: { type: Number, required: true },
  garbagecan: { type: Number, required: true },
  locationAccessible: { type: Boolean, required: true },
  devicesAccessible: { type: [Schema.Types.ObjectId], ref: "Device" },
  communityHint: { type: String, required: false },
});

const Property =
  mongoose.models.Property || mongoose.model("Property", propertySchema);

export default Property;

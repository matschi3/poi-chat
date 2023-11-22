import mongoose from "mongoose";
import "./xxxxx.js";

const { Schema } = mongoose;

const poiSchema = new Schema({
  uuid: { type: String, required: true },
  categories: { type: [Schema.Types.ObjectId], ref: "Category" },
  location: { type: [Schema.Types.ObjectId], ref: "Location" },
  properties: { type: [Schema.Types.ObjectId], ref: "Propertiy" },
  activities: { type: [Schema.Types.ObjectId], ref: "Activitiy" },
  assets: { type: [Schema.Types.ObjectId], ref: "Asset" },
  events: { type: [Schema.Types.ObjectId], ref: "Event" },
  createdBy: { type: [Schema.Types.ObjectId], ref: "User" },
});

const Poi = mongoose.models.Poi || mongoose.model("Poi", poiSchema);

export default Poi;

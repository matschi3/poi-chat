import mongoose from "mongoose";
import "./Category.js";
import "./Location.js";
import "./Property.js";
import "./Activity.js";
import "./Asset.js";
import "./Event.js";

const { Schema } = mongoose;

const poiSchema = new Schema(
  {
    uuid: { type: String, required: true },
    categories: { type: [Schema.Types.ObjectId], ref: "Category" },
    location: { type: [Schema.Types.ObjectId], ref: "Location" },
    properties: { type: [Schema.Types.ObjectId], ref: "Property" },
    activities: { type: [Schema.Types.ObjectId], ref: "Activity" },
    assets: { type: [Schema.Types.ObjectId], ref: "Asset" },
    events: { type: [Schema.Types.ObjectId], ref: "Event" },
  },
  {
    timestamps: true,
  }
);

const Poi = mongoose.models.Poi || mongoose.model("Poi", poiSchema);

export default Poi;

import mongoose from "mongoose";
import "./Asset.js";

const Schema = mongoose.Schema;

const sportSchema = new Schema({
  uuid: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
  assets: { type: [Schema.Types.ObjectId], ref: "Asset" },
});

const Sport = mongoose.models.Sport || mongoose.model("Sport", sportSchema);

export default Sport;

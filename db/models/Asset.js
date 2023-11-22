import mongoose from "mongoose";

const Schema = mongoose.Schema;

const assetSchema = new Schema({
  uuid: { type: String, required: true },
});

const Asset = mongoose.models.Asset || mongoose.model("Asset", assetSchema);

export default Asset;

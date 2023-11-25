import mongoose from "mongoose";

const Schema = mongoose.Schema;

const deviceSchema = new Schema({
  uuid: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
  assets: { type: [Schema.Types.ObjectId], ref: "Asset" },
});

const Device = mongoose.models.Device || mongoose.model("Device", deviceSchema);

export default Device;

import mongoose from "mongoose";
import "./Device.js";
import "./Sport.js";

const Schema = mongoose.Schema;

const activitySchema = new Schema({
  uuid: { type: String, required: true },
  devices: { type: [Schema.Types.ObjectId], ref: "Device" },
  sports: { type: [Schema.Types.ObjectId], ref: "Sport" },
});

const Activity =
  mongoose.models.Activity || mongoose.model("Activity", activitySchema);

export default Activity;

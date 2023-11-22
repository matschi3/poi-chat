import mongoose from "mongoose";

const Schema = mongoose.Schema;

const activitySchema = new Schema({
  uuid: { type: String, required: true },
});

const Activity =
  mongoose.models.Activity || mongoose.model("Activity", activitySchema);

export default Activity;

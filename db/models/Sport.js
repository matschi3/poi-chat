import mongoose from "mongoose";

const Schema = mongoose.Schema;

const sportSchema = new Schema({
  uuid: { type: String, required: true },
  devices: { type: [Schema.Types.ObjectId], ref: "Device" },
  sports: { type: [Schema.Types.ObjectId], ref: "Sport" },
});

const Sport = mongoose.models.Sport || mongoose.model("Sport", sportSchema);

export default Sport;

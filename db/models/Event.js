import mongoose from "mongoose";

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  uuid: { type: String, required: true },
});

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

export default Event;

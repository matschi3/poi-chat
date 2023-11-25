import mongoose from "mongoose";

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  uuid: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  dateStart: { type: Date, required: true }, // maybe change to string later
  dateEnd: { type: Date, required: true }, // maybe change to string later
  dateCreated: { type: Date, required: true }, // maybe change to string later
});

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

export default Event;

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const adressSchema = new Schema({
  uuid: { type: String, required: true },
  street: { type: String, required: true },
  housenumber: { type: String, required: true },
  postcode: { type: String, required: true },
  city: { type: String, required: true },
});

const Adress = mongoose.models.Adress || mongoose.model("Adress", adressSchema);

export default Adress;

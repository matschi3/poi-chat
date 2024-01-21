import mongoose from "mongoose";
import "./Asset.js";

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  uuid: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  assets: { type: [Schema.Types.ObjectId], ref: "Asset" },
});

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;

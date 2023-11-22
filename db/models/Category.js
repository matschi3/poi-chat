import mongoose from "mongoose";

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  uuid: { type: String, required: true },
});

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;

import mongoose from "mongoose";
import "./Poi";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: { type: String, unique: true, required: true },
    password: { type: String, required: false },
    role: { type: String, required: true, default: "user" },
    favorites: { type: [Schema.Types.ObjectId], ref: "Poi" },
    lastCoordinates: { type: Object, required: false },
    preferredLogin: { type: String, required: false, default: "credentials" },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;

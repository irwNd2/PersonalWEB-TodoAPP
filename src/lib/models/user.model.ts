import { models, model, Schema } from "mongoose";

const UserSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    role: {
      type: String,
    },
  },
  { timestamps: true }
);

const UserModel = models.User || model("Users", UserSchema);
export default UserModel;

import { models, model, Schema } from "mongoose";

const UserSchema: Schema = new Schema({
  emai: {
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
});

const UserModel = models.User || model("User", UserSchema);
export default UserModel;

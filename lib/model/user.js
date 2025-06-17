import bcrypt from "bcryptjs";
let { Schema, model, models } = require("mongoose");

let userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  cartItem: { type: Object, default: {} },
  isAdmin: { type: Boolean, default: false },
});

export let hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

export let UserModel = models.user || model("user", userSchema);
// module.exports = { hashPassword, UserModel };

let { Schema, model, models } = require("mongoose");

let addressSchema = Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  streetAddress: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pinCode: { type: Number, required: true },
  phoneNumber: { type: Number, required: true },
  email: { type: String, required: true },
});

export let addressModel = models.addresses || model("addresses", addressSchema);
// module.exports = {addressModel};

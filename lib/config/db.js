let mongoose = require("mongoose");

let connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rwtgeet6:geeta99@cluster0.c2odlap.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    );
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
};
module.exports = { connectDb };

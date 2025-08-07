import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.CONNECT_URL);
    console.log("🟢 MongoDB connected");
  } catch (error) {
    console.log("🔴 DB connection failed:", error);
  }
};

import mongoose from "mongoose";
import { config } from "../config/config";

export const connectDatabase = async () => {
  try {
    await mongoose.connect(config.mongoDBUrl);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

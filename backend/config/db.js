import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const DB_URI = process.env.MONGO_URI;

const connectDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("Database (MongoDB) connected successfully!");
  } catch (error) {
    console.log("Database connection failed!", error);
    throw error;
  }
}

export default connectDatabase;
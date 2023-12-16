import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect("mongodb://127.0.0.1:27017/portfolio");
      console.log("db connected");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI as string;
    if (!mongoURI) {
      throw new Error("MONGODB_URI environment variable is not defined");
    }
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with a failure code
    //status code 1 indicates that the process exited due to an error
    //status code 0 indicates that the process exited successfully without any errors
  }
};

import mongoose from "mongoose";

export async function connectDatabase(
  url: string,
  dbName: string
): Promise<void> {
  try {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName,
    };

    await mongoose.connect(url, options);
    console.log("Connected to the database 🌱");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
}

export function getDatabase(): mongoose.Connection {
  return mongoose.connection;
}

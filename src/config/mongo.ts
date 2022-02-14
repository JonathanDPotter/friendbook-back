import { connect } from "mongoose";
import config from "./index";

const connectMongo = async () => {
  try {
    const conn = await connect(config.mongo.url || "URL");
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
  }
};

export default connectMongo;

import express from "express";
import morgan from "morgan";
import cors from "cors";
// util
import config from "./config";
import connectMongo from "./config/mongo";
import connectCloudinary from "./config/cloudinary";
// routes
import indexRoutes from "./routes";
import userRoutes from "./routes/user";
import postRoutes from "./routes/post";
import imageRoutes from "./routes/image";

const server = express();

server.listen(config.server.port, () => {
  console.log("Server running on port:", config.server.port);

  // logging when in developement
  if (config.server.env === "developement") server.use(morgan("dev"));

  // parse requests
  server.use(express.urlencoded({ extended: true, limit: "50mb" }));
  server.use(express.json({ limit: "50mb" }));

  // connect the database
  connectMongo();

  // connect cloudinary for image uploads
  connectCloudinary();

  // cross-origin-routing
  server.use(
    cors({
      origin: config.client.url,
    })
  );

  // routing
  server.use("/", indexRoutes);
  server.use("/api/users", userRoutes);
  server.use("/api/posts", postRoutes);
  server.use("/api/image", imageRoutes);
});

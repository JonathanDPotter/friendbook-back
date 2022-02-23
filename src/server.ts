import express from "express";
import morgan from "morgan";
import cors from "cors";
// util
import config from "./config";
import connectMongo from "./config/mongo";
// routes
import indexRoutes from "./routes";
import userRoutes from "./routes/user";
import postRoutes from "./routes/post";

const server = express();

server.listen(config.server.port, () => {
  console.log("Server running on port:", config.server.port);

  // logging whn in developement
  if (config.server.env === "developement") server.use(morgan("dev"));

  // parse requests
  server.use(express.urlencoded({ extended: false }));
  server.use(express.json());

  // connect the database
  connectMongo();

  // cross-origin-routing
  server.use(
    cors({
      origin: config.client.url,
      credentials: true,
    })
  );

  // routing
  server.use("/", indexRoutes);
  server.use("/api/users", userRoutes);
  server.use("/api/posts", postRoutes)
});

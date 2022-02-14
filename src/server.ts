import express from "express";
import morgan from "morgan";
import passport from "passport";
import cors from "cors";
// util
import config from "./config";
import connectMongo from "./config/mongo";
import passportConfig from "./config/passport";
// routes
import indexRoutes from "./routes";

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

  // configure and set passport middleware
  passportConfig(passport);

  server.use(passport.initialize());

  // cross-origin-routing
  server.use(cors());

  // routing
  server.use("/", indexRoutes);
});

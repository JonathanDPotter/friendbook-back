import express from "express";
import morgan from "morgan";
// util
import config from "./config";
// routes
import indexRoutes from "./routes";

const server = express();

server.listen(config.server.port, () => {
  if (config.server.env === "developement") server.use(morgan("dev"));
  console.log("Server running on port:", config.server.port);
  server.use("/", indexRoutes);
});

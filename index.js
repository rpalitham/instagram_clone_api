global.appPath = __dirname;
import "./Globals";
// import winston from "./Config/winston";
import express from "express";
// import morgan from "morgan";
import cors from "cors";
import routes from "./Routes";
import morgan from "morgan";

const app = express();
const port = process.env.PORT || 8888;

// app.use(morgan("combined", { stream: winston.stream }));
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", routes);

connectedEmitter.on("dbTablesCreated", () => {
  app.listen(port, () =>
    console.log(`Connection Established!!! Server running  on ${port}`)
  );
});
connectedEmitter.on("dbConnectionError", () => {
  console.log("Please check db creds and restart the app");
});

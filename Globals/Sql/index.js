import Sequelize from "sequelize";
import EventEmitter from "events";
import fs from "fs";
import path from "path";

global.connectedEmitter = new EventEmitter();
global.Op = Sequelize.Op;

global.sequelize = new Sequelize("instagram_clone", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  logging: process.env.DB_LOGGING ? true : false,
  pool: {
    max: 5,
    min: 1,
    acquire: 30000,
    idle: 10000,
  },
});

(async function () {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    connectedEmitter.emit("connectedDbs");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    connectedEmitter.emit("dbConnectionError");
  }

  fs.readdirSync(appPath + "/Schemas").forEach(function (file) {
    if (file.endsWith(".js")) {
      let filename = file.replace(".js", "");
      require(path.join(appPath + `/Schemas/${filename}`))(
        sequelize,
        Sequelize
      );
    }
  });

  try {
    await sequelize.sync();
    connectedEmitter.emit("dbTablesCreated");
    console.log("tables created successfully");
  } catch (error) {
    connectedEmitter.emit("dbTablesCreationError");
    console.log("error while creating tables", error);
  }
})();

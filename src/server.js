import startMongo from "./configs/mongo";
import startExpress from "./configs/express";

(() => {
  startExpress();
  startMongo();
})();

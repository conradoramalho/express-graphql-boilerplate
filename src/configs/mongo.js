import mongoose from "mongoose";

const startMongo = () => {
  mongoose.connect("mongodb://stringConnection");

  const db = mongoose.connection;

  db
    .on("error", () => console.log("failed to connect"))
    .once("open", () => console.log("Connected to DB"));
};

export default startMongo;

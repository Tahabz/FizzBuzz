import express from "express";
import fizzBuzzRouter from "./routers/fizzBuzzRouter.js";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/", fizzBuzzRouter);

app.get("/", (req, res) => res.end("hello world"));

app.listen(process.env.PORT, () => {
  console.log(`Server up and running on port ${process.env.PORT}!`);
});

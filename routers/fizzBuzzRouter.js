import { Router } from "express";
import { handleFizzBuzz } from "../controllers/fizzBuzzController.js";

const fizzBuzzRouter = Router();

fizzBuzzRouter.post("/", handleFizzBuzz);

export default fizzBuzzRouter;

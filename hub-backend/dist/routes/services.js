import express from "express";
import { handlerAllServices, handlerServiceById, } from "../api/services.js";
export const servicesRouter = express.Router();
servicesRouter.get("/", handlerAllServices);
servicesRouter.get("/:id", handlerServiceById);

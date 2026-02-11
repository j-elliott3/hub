import type { Router } from "express";
import express from "express";
import { 
    handlerAllServices, 
    handlerServiceById, } from "../api/services.js";

export const servicesRouter: Router = express.Router();

servicesRouter.get("/", handlerAllServices);
servicesRouter.get("/:id", handlerServiceById);

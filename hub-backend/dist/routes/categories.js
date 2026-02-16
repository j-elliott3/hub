import express from "express";
import { handlerAllCategories, handlerCategoryById, handlerServicesByCategoryId } from "../api/categories.js";
export const categoryRouter = express.Router();
categoryRouter.get("/", handlerAllCategories);
categoryRouter.get("/:id", handlerCategoryById);
categoryRouter.get("/:id/services", handlerServicesByCategoryId);

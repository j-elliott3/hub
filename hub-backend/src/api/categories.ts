import { Request, Response } from "express";
import { getCategories, getCategoryById } from "../db/queries/categories.js";
import { getServicesByCategoryId } from "../db/queries/services.js";

export async function handlerAllCategories(req: Request, res: Response) {
    const categories = await getCategories();

    res.json(categories);
}

export async function handlerCategoryById(req: Request, res: Response) {
    const id = req.params.id as string;
    const category = await getCategoryById(id);

    if (!category) {
        return res.status(404).json({ error: "Category not found" });
    }

    res.json(category);
}

export async function handlerServicesByCategoryId(req: Request, res: Response) {
    const categoryId = req.params.id as string;
    const filteredServices = await getServicesByCategoryId(categoryId);

    res.json(filteredServices);
}
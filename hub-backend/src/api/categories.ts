import { Request, Response } from "express";
import { categories } from "../data/categories.js";
import { services } from "../data/services.js";

export async function handlerAllCategories(req: Request, res: Response) {
    res.json(categories);
}

export async function handlerCategoryById(req: Request, res: Response) {
    const id = req.params.id;
    const category = categories.find((c) => c.id === id);

    if (!category) {
        return res.status(404).json({ error: "Category not found" });
    }

    res.json(category);
}

export async function handlerServicesByCategoryId(req: Request, res: Response) {
    const id = req.params.id;
    const filtered = services.filter((s) => s.categoryId === id);

    res.json(filtered); // returning empty array [] if no services is ok
}
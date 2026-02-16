import { getCategories, getCategoryById } from "../db/queries/categories.js";
import { getServicesByCategoryId } from "../db/queries/services.js";
export async function handlerAllCategories(req, res) {
    const categories = await getCategories();
    res.json(categories);
}
export async function handlerCategoryById(req, res) {
    const id = req.params.id;
    const category = await getCategoryById(id);
    if (!category) {
        return res.status(404).json({ error: "Category not found" });
    }
    res.json(category);
}
export async function handlerServicesByCategoryId(req, res) {
    const categoryId = req.params.id;
    const filteredServices = await getServicesByCategoryId(categoryId);
    res.json(filteredServices);
}

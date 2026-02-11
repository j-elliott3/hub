"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerAllCategories = handlerAllCategories;
exports.handlerCategoryById = handlerCategoryById;
exports.handlerServicesByCategoryId = handlerServicesByCategoryId;
const categories_js_1 = require("../data/categories.js");
const services_js_1 = require("../data/services.js");
async function handlerAllCategories(req, res) {
    res.json(categories_js_1.categories);
}
async function handlerCategoryById(req, res) {
    const id = req.params.id;
    const category = categories_js_1.categories.find((c) => c.id === id);
    if (!category) {
        return res.status(404).json({ error: "Category not found" });
    }
    res.json(category);
}
async function handlerServicesByCategoryId(req, res) {
    const id = req.params.id;
    const filtered = services_js_1.services.filter((s) => s.categoryId === id);
    res.json(filtered); // returning empty array [] if no services is ok
}

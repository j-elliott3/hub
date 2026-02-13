import type { Category } from "../types/category.js";

// During dev, backend is on port 3000. We'll centralize the base here.
// Later in production you can change API_BASE to "" (same origin).
const API_BASE =
  import.meta.env.DEV ? "http://localhost:3000" : "";

// Fetch all categories from the backend
export async function fetchCategories(): Promise<Category[]> {
    const response = await fetch(`${API_BASE}/api/categories`);

    if (!response.ok) {
        // If the HTTP status isn't 2xx, throw an error so the caller can handle it.
        throw new Error(`Failed to fetch categories: ${response.status}`);
    }

    // Parse and return JSON as Category[]
    return response.json();
}

export async function fetchCategoryById(id: string): Promise<Category> {
  const res = await fetch(`${API_BASE}/api/categories/${id}`);
  if (!res.ok) throw new Error("Category not found");
  return res.json();
}

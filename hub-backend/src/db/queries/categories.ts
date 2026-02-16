import { db } from "../dbIndex.js";
import { asc, eq } from "drizzle-orm";
import { NewCategory, categories } from "../schema.js";

export async function createCategory(category: NewCategory) {
    const [result] = await db
        .insert(categories)
        .values(category)
        .onConflictDoNothing()
        .returning();
    return result;
}

export async function getCategories() {
    return db.select().from(categories);
}

export async function reset() {
    await db.delete(categories);
}

export async function getCategoryById(id: string) {
    const rows = await db.select().from(categories).where(eq(categories.id, id));

    const category = rows[0];
    return category;
}

export async function deleteCategory(id: string) {
  const rows = await db.delete(categories).where(eq(categories.id, id)).returning();
  return rows.length > 0;
}
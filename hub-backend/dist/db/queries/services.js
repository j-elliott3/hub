import { db } from "../dbIndex.js";
import { eq } from "drizzle-orm";
import { services } from "../schema.js";
export async function createService(service) {
    const [result] = await db
        .insert(services)
        .values(service)
        .onConflictDoNothing()
        .returning();
    return result;
}
export async function getServices() {
    return db.select().from(services);
}
export async function getServicesByCategoryId(categoryId) {
    const resultRows = await db
        .select()
        .from(services)
        .where(eq(services.categoryId, categoryId));
    return resultRows;
}
export async function getServiceById(id) {
    const rows = await db
        .select()
        .from(services)
        .where(eq(services.id, id));
    const service = rows[0];
    return service;
}
export async function deleteService(id) {
    const rows = await db.delete(services).where(eq(services.id, id)).returning();
    return rows.length > 0;
}

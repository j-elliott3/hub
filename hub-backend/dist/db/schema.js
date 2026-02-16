import { pgTable, pgEnum, timestamp, varchar, uuid, text } from "drizzle-orm/pg-core";
export const categories = pgTable("categories", {
    id: varchar("id", { length: 64 }).primaryKey(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at")
        .notNull()
        .defaultNow()
        .$onUpdate(() => new Date()),
    name: varchar("name", { length: 64 }).unique().notNull(),
    description: varchar("description", { length: 128 }).notNull(),
});
export const serviceStatusEnum = pgEnum("service_status", ["planned", "online", "offline"]);
export const services = pgTable("services", {
    id: uuid("id").primaryKey().defaultRandom(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at")
        .notNull()
        .defaultNow()
        .$onUpdate(() => new Date()),
    categoryId: varchar('category_id', { length: 64 })
        .notNull()
        .references(() => categories.id, { onDelete: 'cascade' }),
    name: varchar("name", { length: 64 }).unique().notNull(),
    description: varchar("description", { length: 256 }).notNull(),
    status: serviceStatusEnum("service_status").notNull().default("planned"),
    techStack: varchar("tech_stack", { length: 64 }).notNull(),
    details: text("details").notNull().default(""),
    projectUrl: varchar("project_url", { length: 256 }).notNull().default(""),
});

import { pgEnum, pgTable, text } from "drizzle-orm/pg-core";

const testStatus = pgEnum("test_status", ["one", "two"]);

export const testTable = pgTable("test_table", {
  id: text("id").primaryKey(),
  status: testStatus("status").notNull().default("one"),
});
import express from "express";
import { handlerReadiness } from "./api/health.js";
import cors from "cors";
import { servicesRouter } from "./routes/services.js";
import { categoryRouter } from "./routes/categories.js";
import dotenv from "dotenv";

import postgres from "postgres";
import { config } from "./config.js";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";

const migrationClient = postgres(config.db.url, { max: 1 });
await migrate(drizzle(migrationClient), config.db.migrationConfig);

dotenv.config();

const app = express();
const PORT = config.api.port ?? 3000;

app.use(cors());
app.use("/app", express.static("./src/app"));

app.get("/api/health", handlerReadiness);

app.use("/api/services", servicesRouter);
app.use("/api/categories", categoryRouter);

app.listen(PORT, () => {
    console.log(`Hub is running at http://localhost:${PORT}`)
});
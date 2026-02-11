import express from "express";
import { handlerReadiness } from "./api/health.js";
import cors from "cors";
import { servicesRouter } from "./routes/services.js";
import { categoryRouter } from "./routes/categories.js";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors());
app.use("/app", express.static("./src/app"));

app.get("/api/health", handlerReadiness);

app.use("/api/services", servicesRouter);
app.use("/api/categories", categoryRouter);

app.listen(PORT, () => {
    console.log(`Hub is running at http://localhost:${PORT}`)
});
import express from "express";
import { handlerReadiness } from "./api/healthz.js";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use("/app", express.static("./src/app"));

app.get("/api/healthz", handlerReadiness);

app.listen(PORT, () => {
    console.log(`Hub is running at http://localhost:${PORT}`)
});
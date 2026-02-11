"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const health_js_1 = require("./api/health.js");
const cors_1 = __importDefault(require("cors"));
const services_js_1 = require("./routes/services.js");
const categories_js_1 = require("./routes/categories.js");
const app = (0, express_1.default)();
const PORT = process.env.PORT ?? 3000;
app.use((0, cors_1.default)());
app.use("/app", express_1.default.static("./src/app"));
app.get("/api/health", health_js_1.handlerReadiness);
app.use("/api/services", services_js_1.servicesRouter);
app.use("/api/categories", categories_js_1.categoryRouter);
app.listen(PORT, () => {
    console.log(`Hub is running at http://localhost:${PORT}`);
});

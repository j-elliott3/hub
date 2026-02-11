"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const healthz_js_1 = require("./api/healthz.js");
const app = (0, express_1.default)();
const PORT = process.env.PORT ?? 3000;
app.get("/api/healthz", healthz_js_1.handlerReadiness);
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

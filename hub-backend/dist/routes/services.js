"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.servicesRouter = void 0;
const express_1 = __importDefault(require("express"));
const services_js_1 = require("../api/services.js");
exports.servicesRouter = express_1.default.Router();
exports.servicesRouter.get("/", services_js_1.handlerAllServices);
exports.servicesRouter.get("/:id", services_js_1.handlerServiceById);

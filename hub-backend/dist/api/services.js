"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerAllServices = handlerAllServices;
exports.handlerServiceById = handlerServiceById;
const services_js_1 = require("../data/services.js");
async function handlerAllServices(req, res) {
    res.json(services_js_1.services);
}
async function handlerServiceById(req, res) {
    const id = req.params.id;
    const service = services_js_1.services.find((s) => s.id === id);
    if (!service) {
        return res.status(404).json({ error: "Service not found" });
    }
    res.json(service);
}

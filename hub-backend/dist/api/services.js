import { getServices, getServiceById } from "../db/queries/services.js";
export async function handlerAllServices(req, res) {
    const services = await getServices();
    res.json(services);
}
export async function handlerServiceById(req, res) {
    const id = req.params.id;
    const service = await getServiceById(id);
    if (!service) {
        return res.status(404).json({ error: "Service not found" });
    }
    res.json(service);
}

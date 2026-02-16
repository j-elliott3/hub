import { Request, Response } from "express";
import { getServices, getServiceById } from "../db/queries/services.js";

export async function handlerAllServices(req: Request, res: Response) {
    const services = await getServices();

    res.json(services);
}

export async function handlerServiceById(req: Request, res: Response) {
    const id = req.params.id as string;
    const service = await getServiceById(id);

    if (!service) {
        return res.status(404).json({ error: "Service not found" });
    }

    res.json(service);
}
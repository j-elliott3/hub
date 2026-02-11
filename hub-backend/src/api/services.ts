import { Request, Response } from "express";
import { services } from "../data/services.js";

export async function handlerAllServices(req: Request, res: Response) {
    res.json(services);
}

export async function handlerServiceById(req: Request, res: Response) {
    const id = req.params.id;
    const service = services.find((s) => s.id === id);

    if (!service) {
        return res.status(404).json({ error: "Service not found" });
    }

    res.json(service);
}

export async function handlerServicesByCategoryId(req: Request, res: Response) {
    const id = req.params.id;
    const filtered = services.filter((s) => s.categoryId === id);

    res.json(filtered); // returning empty array [] if no services is ok
}
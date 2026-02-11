import { Request, Response } from "express";

export async function handlerReadiness(req: Request, res: Response) {
    res
    .set("Content-Type", "text/plain; charset=utf-8")
    .json({
        status: "ok",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
    });
}
import type { Service } from "../types/service.js";

const API_BASE = import.meta.env.DEV ? "http://localhost:3000" : "";

// All services in a given category
export async function fetchServicesByCategory(categoryId: string): Promise<Service[]> {
    const res = await fetch(`${API_BASE}/api/categories/${categoryId}/services`);
    if (!res.ok) {
        throw new Error(`Failed to fetch services for category ${categoryId}`);
    }
    return res.json();
}

// One specifc service by ID
export async function fetchServiceById(serviceId: string): Promise<Service> {
    const res = await fetch(`${API_BASE}/api/services/${serviceId}`);
    if (!res.ok) {
        throw new Error(`Failed to fetch services for id ${serviceId}`);
    }
    return res.json();
}
import type { CategoryId } from "./category.js";

export type ServiceStatus = "planned" | "online" | "offline";

export interface Service {
    id: string;
    categoryId: CategoryId;
    name: string;
    description: string;  // short, list view
    status: ServiceStatus;
    techStack: string;
    details: string;      // long README-like text
    projectUrl: string;   // link to open the actual project
}
export type CategoryId = "games" | "security" | "projects";

// matching types with the backend
export interface Category {
    id: CategoryId;
    name: string;
    description: string;
};
export type CategoryId = "games" | "security" | "projects";

export type Category = {
    id: CategoryId;
    name: string;
    description: string;
};

export const categories: Category[] = [
    {
        id: "games",
        name: "Games",
        description: "Games and interactive experiments."
    },
    {
        id: "security",
        name: "Security and Networking",
        description: "Security tools and networking experiments.",
    },
    {
        id: "projects",
        name: "Projects",
        description: "General purpose projects, utilities, and demos."
    },
];
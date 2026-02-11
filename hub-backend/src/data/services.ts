import type { CategoryId } from "./categories";

export type ServiceStatus = "planned" | "online" | "offline";

export type Service = {
    id: string;
    categoryId: CategoryId;
    name: string;
    description: string;
    status: ServiceStatus;
    techStack: string;
    details: string;
    projectUrl: string; // where the "Open project" button goes
};

export const services: Service[] = [
    {
    id: "snake-game",
    categoryId: "games",
    name: "Snake Game",
    description: "Classic snake implemented in the browser.",
    status: "planned",
    techStack: "React + TypeScript frontend, minimal backend",
    details: "A simple snake game built to practice keyboard input, canvas rendering, and game loops.",
    projectUrl: "/games/snake", // future route
  },
  {
    id: "packet-sniffer",
    categoryId: "security",
    name: "Packet Sniffer",
    description: "Basic packet capture and visualization tool.",
    status: "planned",
    techStack: "Go backend, minimal HTML frontend",
    details: "Captures and displays simple metadata about network packets on the local network.",
    projectUrl: "/security/packet-sniffer",
  },
];
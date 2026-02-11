"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
exports.services = [
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

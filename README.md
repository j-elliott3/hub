# Home Lab Hub

A small “control plane” web app for my homelab.  
The hub runs on a Raspberry Pi and exposes:

- A **hub UI** with three main categories:
  - Games
  - Security & Networking
  - Projects
- A **backend API** that reads from a Postgres database
- A place to link out to other services/projects (microservices, tools, games) running on the same Pi

The goal is to simulate a mini data center: multiple isolated services, all reachable through a single hub.

---

Backend
cd hub-backend
npm install
npm run build        # tsc -> dist
npm run drizzle:generate
npm run drizzle:migrate

Seed initial data via CLI (see “Admin CLI” below).

Run backend:

npm run dev          # or `npm start` after build
# backend on http://localhost:3000

Frontend
cd hub-frontend
npm install
npm run dev          # Vite dev server on http://localhost:5173

During dev, the frontend calls http://localhost:3000/api/... for data.

Admin CLI (Seeding Categories & Services)
Admin scripts live under src/scripts/ and are run with tsx.

In hub-backend/package.json:

"scripts": {
  "add:category": "tsx src/scripts/addCategory.ts",
  "add:service": "tsx src/scripts/addService.ts"
}

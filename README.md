# Home Lab Hub

A small “control plane” web app for my homelab.  
The hub runs on a Raspberry Pi and exposes:

- A hub UI with three main categories:
  - Games
  - Security & Networking
  - Projects
- A backend API that reads from a Postgres database
- A place to link out to other services/projects (microservices, tools, games) running on the same Pi

The goal is to simulate a mini data center: multiple isolated services, all reachable through a single hub.

---

## Installation (hub-backend/frontend and scripts)

```bash
# install deps
cd hub-backend
npm install

# build TypeScript -> dist
npm run build

# run backend (dev/prod, depending how you've wired it)
npm run dev     # or
npm start

Frontend (hub-frontend)
# install deps
cd hub-frontend
npm install

# dev server
npm run dev

# production build -> dist/
npm run build

Admin CLI (Seeding Categories & Services)
Admin scripts live under src/scripts/ and are run with tsx.

In hub-backend/package.json:

"scripts": {
  "add:category": "tsx src/scripts/addCategory.ts",
  "add:service": "tsx src/scripts/addService.ts"
}

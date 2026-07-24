# CoolBlox - Roblox-like Platform

## Overview
CoolBlox is a complete, original web-based game creation and playing platform with CoolBlox Studio, a powerful browser-based 3D game editor.

**Tech Stack:**
- **Frontend:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, shadcn/ui
- **3D Engine:** Three.js + React Three Fiber + Cannon.js / Rapier for physics
- **Backend:** NestJS (Node.js), TypeScript, Prisma ORM
- **Database:** PostgreSQL + Redis for caching/sessions
- **Authentication:** NextAuth.js + JWT + 2FA
- **Storage:** Supabase or AWS S3 for assets
- **Real-time:** Socket.io / WebSockets for multiplayer/chat
- **Deployment:** Docker, Kubernetes-ready

## Quick Start
1. Clone / setup as per deployment.md
2. `docker-compose up`
3. Visit http://localhost:3000

**Note:** This is a starter architecture. Full implementation requires team effort and significant resources.
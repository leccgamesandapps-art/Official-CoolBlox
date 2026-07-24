# Deployment Instructions

1. Install Docker & Docker Compose
2. Copy .env.example to .env and fill secrets
3. Run: `docker-compose up --build`
4. For production: Use Vercel for frontend, Render/Heroku/AWS for backend, Neon for Postgres
5. Set up domain and SSL

Initial Admin: Create via API /api/auth/register with admin flag.

**Note:** Full production requires implementing payment (Stripe), full auth flows, advanced physics, etc. This provides a solid, extensible foundation.
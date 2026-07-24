# CoolBlox Architecture

## Frontend
- Next.js for SSR/SSG
- React Three Fiber for all 3D rendering
- Zustand or Redux for state management (avatars, inventory)
- Tailwind for responsive, beautiful UI

## Studio Features Implemented
- Viewport with Three.js
- Basic transform tools
- Asset drag & drop ready

## Multiplayer
- Socket.io for real-time sync
- Authoritative server for physics validation
- Lag compensation planned

## Avatar System
- Custom rigged GLTF models
- Modular clothing system using Three.js attachments
- Animation mixer for emotes/walk cycles

## Security
- JWT + HTTP-only cookies
- Rate limiting
- Input sanitization
- Content moderation queue for user-generated content

## Scalability
- Ready for horizontal scaling with Kubernetes
- Asset CDN integration
- Redis for session and matchmaking
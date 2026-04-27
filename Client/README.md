# Mission Engineering

Mission Engineering is a full-stack education platform built for course discovery, student engagement, and role-based dashboard access.

The project is organized into two applications:

- `Client`: React + Vite frontend
- `Server`: Express + MongoDB backend

## Tech Stack

### Frontend

- React 19
- Vite 7
- React Router DOM 7
- Bootstrap 5 and React Bootstrap
- GSAP (animations)
- Formspree (contact form integration)

### Backend

- Node.js
- Express 5
- MongoDB with Mongoose
- JWT (jsonwebtoken) for authentication
- bcryptjs for password hashing
- CORS and dotenv

### Tooling and Deployment

- ESLint for linting
- Vercel configuration available in the client

## Key Features

- Multi-page course and institute website experience
- Role-based authentication (admin and student)
- Protected routes for admin dashboard access
- Notification and test-related backend APIs
- Dedicated health endpoint for backend monitoring

## Project Structure

```text
Mission Engineering/
	Client/   # React frontend
	Server/   # Express backend
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+
- MongoDB instance (local or cloud)

### 1. Install Dependencies

From the workspace root, install each app's dependencies:

```bash
cd Client
npm install

cd ../Server
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in `Server`:

```env
PORT=5000
CLIENT_ORIGIN=http://localhost:5173
MONGODB_URL=mongodb://127.0.0.1:27017/mission-engineering
JWT_SECRET=replace-with-secure-secret

ADMIN_ONLY_MODE=true
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=change-me
ADMIN_FULLNAME=Admin
```

Create a `.env` file in `Client`:

```env
VITE_API_URL=http://localhost:5000
```

### 3. Run the Applications

Run backend:

```bash
cd Server
npm run dev
```

Run frontend in a separate terminal:

```bash
cd Client
npm run dev
```

Frontend default URL: `http://localhost:5173`  
Backend default URL: `http://localhost:5000`

## Available Scripts

### Client

- `npm run dev`: Start Vite development server
- `npm run build`: Create production build
- `npm run preview`: Preview production build locally
- `npm run lint`: Run ESLint checks

### Server

- `npm run dev`: Start server with Node watch mode
- `npm start`: Start server normally

## Backend API Base and Core Routes

Base URL: `http://localhost:5000`

- `GET /api/health`
- `POST /api/auth/signup`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `... /api/notifications`
- `... /api/tests`

## Notes

- In admin-only mode, student signup and student login are disabled.
- The frontend reads API base URL from `VITE_API_URL`.
- JWT secret defaults to a development fallback if not provided, but setting `JWT_SECRET` is strongly recommended for any non-local environment.

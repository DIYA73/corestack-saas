# 🚀 CoreStack SaaS Platform (Elite Full-Stack SaaS)

Production-ready multi-tenant SaaS platform with AI assistant, Stripe subscriptions, authentication system, and admin dashboard.

Built as a complete modern SaaS architecture for portfolio & real-world deployment.

---

# 🌍 Live Demo (after deploy)
Frontend: https://corestack-saas-ehlv.vercel.app
Backend API: https://corestack-saas-1.onrender.com

Demo login:
admin@test.com  
password: 123456

---

# 🧠 Tech Stack

Frontend:
- Next.js 16
- React
- TypeScript
- Tailwind UI
- Axios

Backend:
- Node.js
- Express
- TypeScript
- PostgreSQL
- Prisma ORM
- JWT Authentication

Payments:
- Stripe subscriptions

AI:
- OpenAI API integration

Security:
- Role-based auth (Admin/User)
- Protected routes
- Rate limiting
- Token usage limits

---

# ✨ Features

### 🔐 Authentication System
- Register/Login
- JWT auth
- Role system (admin/user)
- Protected routes

### 💳 SaaS Subscription System
- Free & Pro plans
- Stripe checkout
- Billing page
- Plan upgrade logic

### 🤖 AI Assistant
- Chat endpoint
- Token usage tracking
- Pro-only access
- OpenAI integration ready

### 👑 Admin Dashboard
- View users
- Track usage
- Plan management
- Analytics-ready structure

---

# 🏗 Project Structure

corestack-saas/
├── backend/ (Node API)
├── corestack-frontend/ (Next.js app)
└── README.md

---

# ⚙️ Run Locally

## Backend

cd backend
npm install
npm run dev

## Frontend

cd corestack-frontend
npm install
npm run dev

---

# 🔑 Environment Variables

Backend `.env`

DATABASE_URL=
JWT_SECRET=
STRIPE_SECRET=
STRIPE_PRICE_ID=
OPENAI_API_KEY=
PORT=5050

Frontend `.env.local`

NEXT_PUBLIC_API_URL=http://localhost:5050

---

# 🚀 Deployment

Frontend → Vercel  
Backend → Render  
Database → PostgreSQL  

---

# 👨‍💻 Author

Built by Diya Taib Ismahil  
Full-Stack Developer | AI Engineer | SaaS Builder

---

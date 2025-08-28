# Frontend Challenge – Javier Rojas

This is a **Next.js 14** project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).  
It is a modular SaaS-style frontend built with **TypeScript**, **Tailwind CSS**, **Axios**, and **TanStack Query**, including a structured dashboard, landing page, FAQ, pricing, testimonials, and authentication endpoints.

---

## Table of Contents

- [Getting Started](#getting-started)  
- [Project Structure](#project-structure)  
- [Components](#components)  
- [Authentication Endpoints](#authentication-endpoints)  
- [Development](#development)  
- [Learn More](#learn-more)  
- [Deployment](#deployment)

---

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
# or
yarn
yarn dev
# or
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.  
Edit pages inside the `app` directory and components inside `components` to see live updates.

---

## Project Structure

```
/app
  /page.tsx           # Main entry for the homepage
/components           # Reusable UI components
/modules              # Domain-specific modules (e.g., auth)
  /auth/types          # TypeScript types for authentication
/public               # Static assets
/styles               # Tailwind CSS & global styles
```

---

## Components

The homepage is composed of the following sections:

- `SaasLandingSection` – Hero section for the landing page  
- `ProjectDashboardSection` – Dashboard overview of projects  
- `PainPointsSection` – Key user pain points  
- `ContentDashboard` – Detailed content and analytics  
- `TestimonialsSection` – Customer testimonials  
- `FAQSection` – Frequently Asked Questions  
- `PricingSection` – Pricing plans  
- `CTASection` – Call-to-action for users  
- `FooterSection` – Footer with links and information  

Each component is modular, easy to reuse, and follows **TypeScript** typing for safety.

---

## Authentication Endpoints

This project includes simple **API routes** for authentication:

### POST `/api/auth/signup`

Registers a new user:

```ts
const body = { email: string, name: string }

Response:
{
  success: true,
  data: { email, name },
  message: 'User signed up successfully',
  statusCode: 201,
  timestamp: string,
  service: 'AuthService'
}
```

Cookies are set with `httpOnly` and secure flags for authentication persistence.

---

### DELETE `/api/auth/logout`

Logs out a user:

```ts
Response:
{
  success: true,
  message: 'User logged out successfully',
  statusCode: 200,
  timestamp: string,
  service: 'AuthService'
}
```

Clears the authentication cookie.

---

## Development

This project uses:

- **Next.js 14 App Router** – File-based routing and server actions  
- **TypeScript** – Strong typing for safer code and components  
- **Tailwind CSS** – Utility-first styling  
- **Framer Motion** – Animations for interactive UI  
- **Axios** – For HTTP requests  
- **TanStack Query** – For data fetching, caching, and synchronization  

You can start editing `app/page.tsx` and the components in `components/` to customize the UI.

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)  
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)  
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)  
- [Framer Motion Documentation](https://www.framer.com/motion/)  
- [Axios Documentation](https://axios-http.com/docs/intro)  
- [TanStack Query Documentation](https://tanstack.com/query/latest)

---

## Deployment

Deploy easily on **Vercel**:

```bash
vercel --prod
```

Check [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more options.

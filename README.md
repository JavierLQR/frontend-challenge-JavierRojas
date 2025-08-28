# Frontend Challenge – Javier Rojas

Este proyecto es una implementación del template **SaaSwiftie** de Framer, adaptado a un frontend modular con **Next.js 15**, **TypeScript**, **Tailwind CSS**, **Axios**, **Framer Motion**, **TanStack Query**, y **shadcn/ui** para componentes UI. La estructura incluye una página de inicio con secciones interactivas como dashboard, testimonios, precios, preguntas frecuentes y más.

💡 **Nota inicial:** La página de autenticación se puede ver si haces clic en los botones **“Buy Template”** o **“See Solution”** en la página principal.

La página maquetada en este proyecto está disponible en: [https://frontend-challenge-javier-rojas-tw8.vercel.app/](https://frontend-challenge-javier-rojas-tw8.vercel.app/)
El template original en Framer: [https://saaswiftie.framer.website/](https://saaswiftie.framer.website/)

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

Instala las dependencias y ejecuta el servidor de desarrollo:

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

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado. Edita páginas dentro de `app` y componentes dentro de `components/` para ver actualizaciones en vivo.

---

## Project Structure

```
/app
  /page.tsx           # Entrada principal de la página
/components           # Componentes reutilizables
/modules              # Módulos específicos (p.ej., auth)
  /auth/types          # Tipos de TypeScript para autenticación
/public               # Archivos estáticos
/styles               # Estilos globales y Tailwind
```

---

## Components

- `SaasLandingSection` – Hero section del landing page  
- `ProjectDashboardSection` – Dashboard de proyectos  
- `PainPointsSection` – Puntos de dolor clave  
- `ContentDashboard` – Contenido y analíticas detalladas  
- `TestimonialsSection` – Testimonios de usuarios  
- `FAQSection` – Preguntas frecuentes  
- `PricingSection` – Planes de precios  
- `CTASection` – Call-to-action  
- `FooterSection` – Footer con información y enlaces  

Cada componente es modular y reutilizable con tipado **TypeScript** y estilos de **shadcn/ui** cuando aplica.

---

## Authentication Endpoints

### POST `/api/auth/signup`

Registra un nuevo usuario:

```ts
const body = { email: string, name: string }

Response:
{
  success: true,
  data: { email, name },
  message: 'Usuario registrado con éxito',
  statusCode: 201,
  timestamp: string,
  service: 'AuthService'
}
```

### DELETE `/api/auth/logout`

Cierra sesión de un usuario:

```ts
Response:
{
  success: true,
  message: 'Usuario desconectado con éxito',
  statusCode: 200,
  timestamp: string,
  service: 'AuthService'
}
```

---

## Development

Este proyecto utiliza:

- **Next.js 15 App Router** – Enrutamiento basado en archivos y server actions  
- **TypeScript** – Tipado estático  
- **Tailwind CSS** – Diseño utilitario  
- **Framer Motion** – Animaciones interactivas  
- **Axios** – Cliente HTTP  
- **TanStack Query** – Gestión de datos y cache  
- **shadcn/ui** – Componentes de interfaz reutilizables y consistentes

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)  
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)  
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)  
- [Framer Motion Documentation](https://www.framer.com/motion/)  
- [Axios Documentation](https://axios-http.com/docs/intro)  
- [TanStack Query Documentation](https://tanstack.com/query/latest)  
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)

---

## Deployment

Deploy en **Vercel**:

```bash
vercel --prod
```

---

## Nota

Este proyecto fue desarrollado como prueba técnica, utilizando el template **SaaSwiftie** de Framer. La implementación se enfocó en modularidad, reutilización de componentes, optimización de rendimiento y consistencia visual usando **shadcn/ui**.

[Ver proyecto maquetado](https://frontend-challenge-javier-rojas-tw8.vercel.app/)
[Template original en Framer](https://saaswiftie.framer.website/)

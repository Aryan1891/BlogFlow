## 🤖 Introduction

Hey everyone, what's up 👋🏻

**BlogFlow** is a multi-tenant blogging SaaS application built using the best technologies available today. This full-stack application covers everything from user authentication to secure payments and file uploads. BlogFlow allows users to create their personal blogs, manage content, and handle payments seamlessly.

## ⚙️ Tech Stack

- Next.js 15 (App Router)
- Kinde (Authentication with MFA, Passwordless, OAuth)
- Supabase (PostgreSQL Database)
- Prisma ORM
- Stripe (Payments & Webhooks)
- Tailwind CSS
- Shadcn/UI
- Zod & Conform (Server Validation)
- Uploadthing (File Uploads)
- Vercel (Deployment)

## 🔋 Features

👉 **Authentication with Kinde**: Includes passwordless login and multi-factor authentication (MFA) for increased security, with support for OAuth providers like Google and GitHub.

👉 **Payments with Stripe**: Users can subscribe to premium features using Stripe, with webhooks implemented to manage billing events securely and efficiently.

👉 **Supabase Postgres Database****: A powerful, scalable, and fast database for storing all blog-related data. Prisma ORM is used to interact with the database effortlessly.

👉 **Server Validation**: Form inputs and data are validated server-side using Zod and Conform, ensuring robust data handling.

👉 **Unique Subdirectory for Blogs**: Each user gets a unique subdirectory for their blog (e.g., `yourblog.blogflow.com`), providing personalized access and branding.

👉 **File Uploads with Uploadthing**: Easily upload and manage images and media content directly to the blog, ensuring quick and secure storage.

👉 **Responsive Design**: Built with Tailwind CSS and Shadcn UI, BlogFlow ensures a clean and responsive UI that looks great on all devices.

👉 **Landing Page & Performance**: Features a beautiful landing page, optimized for performance and search engine visibility. The entire app is performance-optimized to ensure fast load times.

👉 **Deployment to Vercel**: The project is deployed on Vercel for fast and secure serverless hosting, ensuring seamless deployment and scaling.

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

### Cloning the Repository

```bash
git clone https://github.com/Aryan1891/BlogFlow.git
cd BlogFlow

# StarInfoSec CRM Dashboard

Enterprise-grade CRM Dashboard for StarInfoSec's sales and training operations.

## Overview

This CRM dashboard is built within the existing StarInfoSec website repository, leveraging Next.js 16 App Router, TypeScript, Prisma, and NextAuth for secure authentication and authorization.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js v5 (Auth.js)
- **UI**: Tailwind CSS + shadcn/ui components
- **Charts**: Recharts
- **Validation**: Zod
- **Password Hashing**: bcryptjs

## Features Implemented (Phase 1 - Foundation)

### ✅ Core Infrastructure
- [x] Prisma schema with all models (User, Service, Lead, Deal, SalesTarget, TrainingBatch, Enrollment, Notification, AuditLog)
- [x] NextAuth configuration with credentials provider and JWT sessions
- [x] Role-based access control (Admin, Sales Manager, Sales Executive)
- [x] Protected routes with middleware
- [x] Database seed script with sample data

### ✅ Authentication & Authorization
- [x] Login page with demo credentials
- [x] Session management with httpOnly cookies
- [x] Role-based route protection
- [x] User helpers for authentication checks

### ✅ Dashboard Layout
- [x] Responsive sidebar navigation
- [x] Header with user menu and notifications bell
- [x] Role-based navigation filtering
- [x] Professional StarInfoSec branding

### ✅ Dashboard Pages
- [x] Overview dashboard with KPI cards
- [x] Services overview page
- [x] Placeholder pages for: Leads, Deals, Team, Analytics, Training, Notifications, Admin

## Database Schema

### Models

1. **User** - System users (Admin, Sales Manager, Sales Executive)
2. **Service** - StarInfoSec's 5 services
3. **Lead** - Sales leads with stages and assignments
4. **Deal** - Deals in pipeline with values and stages
5. **SalesTarget** - Monthly revenue targets per user
6. **TrainingBatch** - Training batches for courses/internships
7. **Enrollment** - Student enrollments in training batches
8. **Notification** - System notifications and alerts
9. **AuditLog** - Audit trail for all CUD operations

### Relationships

- Users belong to Services (team assignment)
- Leads are assigned to Users and associated with Services
- Deals are linked to Leads, assigned to Users, and associated with Services
- Training Batches are mentored by Users and belong to Services
- Enrollments belong to Training Batches

## Setup Instructions

### 1. Install Dependencies

```bash
cd website
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the website directory:

```bash
cp .env.example .env
```

Update the following variables:

```env
# Database - Use your PostgreSQL connection string
DATABASE_URL="postgresql://user:password@localhost:5432/starinfosec_crm?schema=public"

# NextAuth
NEXTAUTH_URL="http://localhost:9002"
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"

# App
NEXT_PUBLIC_APP_NAME="StarInfoSec CRM"
```

### 3. Generate Prisma Client

```bash
npm run prisma:generate
```

### 4. Run Database Migrations

```bash
npm run prisma:migrate
```

When prompted, name your migration (e.g., "init" or "crm-schema").

### 5. Seed the Database

```bash
npm run prisma:seed
```

This creates:
- 1 Admin user
- 5 Sales Managers (one per service)
- 25 Sales Executives (5 per service)
- 5 Services (matching StarInfoSec offerings)
- 50 Sample leads
- 30 Sample deals
- Sales targets for all users
- Sample notifications

### 6. Start Development Server

```bash
npm run dev
```

Visit: http://localhost:9002

## Demo Credentials

After seeding, you can login with:

**Admin:**
- Email: admin@starinfosec.com
- Password: admin123

**Sales Manager:**
- Email: manager1@starinfosec.com
- Password: manager123

**Sales Executive:**
- Email: exec1@starinfosec.com
- Password: exec123

## Project Structure

```
website/
├── prisma/
│   ├── schema.prisma              # Database schema
│   ├── seed.ts                    # Seed script
│   └── migrations/                # Migration files
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/page.tsx    # Login page
│   │   │   └── layout.tsx        # Auth layout
│   │   ├── dashboard/
│   │   │   ├── layout.tsx        # Dashboard shell
│   │   │   ├── page.tsx          # Overview
│   │   │   ├── services/         # Services module
│   │   │   ├── leads/            # Lead management
│   │   │   ├── deals/            # Deal pipeline
│   │   │   ├── team/             # Team management
│   │   │   ├── analytics/        # Analytics
│   │   │   ├── training/         # Training module
│   │   │   ├── notifications/    # Notifications
│   │   │   └── admin/            # Admin panel
│   │   └── api/
│   │       └── auth/[...nextauth]/route.ts  # Auth handler
│   ├── components/
│   │   ├── dashboard/
│   │   │   ├── layout/           # Sidebar, header
│   │   │   └── shared/           # Shared components
│   │   └── ui/                   # shadcn/ui components
│   ├── lib/
│   │   ├── auth.ts               # NextAuth config
│   │   ├── auth-helpers.ts       # Auth utilities
│   │   ├── prisma.ts             # Prisma client
│   │   └── constants/            # Constants and enums
│   └── middleware.ts             # Route protection
└── docs/
    └── crm-dashboard-readme.md   # This file
```

## Role-Based Access Control

### Admin
- Full access to all features
- User management
- Service configuration
- System settings
- View all data across all services

### Sales Manager
- View team data (own service only)
- Assign leads within team
- Manage team deals
- View team analytics
- Cannot access admin panel

### Sales Executive
- View own assigned leads and deals
- Update own deals
- Track own performance
- Cannot assign leads
- Cannot access admin panel

## Security Features

- ✅ JWT-based session management
- ✅ httpOnly, secure cookies
- ✅ bcrypt password hashing (cost factor 12)
- ✅ Protected routes with middleware
- ✅ Role-based authorization
- ✅ Input validation with Zod (ready for implementation)
- ✅ Parameterized queries (Prisma)
- ✅ Security headers (CSP, HSTS, etc.)
- ✅ Audit logging schema (ready for implementation)

## Next Steps (Future Phases)

### Phase 2: Core CRM
- [ ] Complete lead management with CRUD operations
- [ ] Lead filtering, sorting, and search
- [ ] Deal pipeline Kanban board with drag-and-drop
- [ ] API routes with validation

### Phase 3: Services and Team
- [ ] Per-service analytics dashboards
- [ ] Team performance tracking
- [ ] Lead assignment interface
- [ ] Target tracking and visualization

### Phase 4: Analytics and Training
- [ ] Revenue analytics with charts
- [ ] Conversion funnel visualization
- [ ] Training batch management
- [ ] Enrollment tracking

### Phase 5: Admin, Notifications, Polish
- [ ] Complete admin panel
- [ ] User CRUD operations
- [ ] Notification system with cron jobs
- [ ] Report export (CSV/PDF)
- [ ] Audit logging
- [ ] Responsive design polish

## Database Commands

```bash
# Generate Prisma Client
npm run prisma:generate

# Create a new migration
npm run prisma:migrate

# Seed the database
npm run prisma:seed

# Open Prisma Studio (GUI)
npm run prisma:studio

# Reset database (dev only)
npx prisma migrate reset
```

## Deployment

### Vercel Deployment

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `DATABASE_URL` (Vercel Postgres or Neon)
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL` (your production URL)
4. Update build command: `prisma generate && next build`
5. Deploy

### Database Options

- **Vercel Postgres**: Built-in, serverless PostgreSQL
- **Neon**: Serverless PostgreSQL with connection pooling
- **Supabase**: PostgreSQL with additional features

## Support

For questions or issues, contact the StarInfoSec development team.

---

**StarInfoSec -- Securing Digital Trust**

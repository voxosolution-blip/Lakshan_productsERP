# 🧭 Dairy/Yogurt ERP - Setup Guide

## ✅ Phase 1: Backend Foundation (COMPLETED)

The backend foundation has been set up with:

- ✅ Project structure with all modules folders
- ✅ Prisma schema with all database models
- ✅ Express server configuration
- ✅ Authentication module (login, register, JWT)
- ✅ Role-based access control middleware
- ✅ Database configuration
- ✅ Environment configuration

## 🚀 Next Steps to Get Started

### Step 1: Setup Database

1. Make sure PostgreSQL is installed and running
2. Create a database:
   ```sql
   CREATE DATABASE dairy_erp;
   ```
3. Create `.env` file in `backend/` folder:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/dairy_erp?schema=public"
   JWT_SECRET="your-super-secret-jwt-key-change-this"
   JWT_EXPIRES_IN="7d"
   PORT=5000
   NODE_ENV=development
   CORS_ORIGIN="http://localhost:5173"
   ```

### Step 2: Run Database Migrations

```bash
cd backend
npm run prisma:generate
npm run prisma:migrate
```

When prompted, name your migration: `init`

### Step 3: Create First Admin User

Run the seed script to create the default admin user:
```bash
npm run prisma:seed
```

This will create:
- Username: `admin`
- Password: `admin123`
- Role: `ADMIN`

**⚠️ IMPORTANT: Change the password after first login!**

Alternatively, you can use Prisma Studio: `npm run prisma:studio` and manually create a user

### Step 4: Start Backend Server

```bash
cd backend
npm run dev
```

The server will start on `http://localhost:5000`

Test it: Visit `http://localhost:5000/health`

## 📋 What's Been Created

### Backend Structure
```
backend/
├── src/
│   ├── config/
│   │   ├── db.js           ✅ Prisma client setup
│   │   └── env.js          ✅ Environment config
│   ├── middleware/
│   │   ├── auth.js         ✅ JWT authentication
│   │   └── role.js         ✅ Role-based access
│   ├── modules/
│   │   └── auth/           ✅ Login, Register, Profile
│   │       ├── auth.controller.js
│   │       └── auth.routes.js
│   ├── app.js              ✅ Express app setup
│   └── server.js           ✅ Server entry point
├── prisma/
│   └── schema.prisma       ✅ Complete database schema
├── package.json            ✅ Dependencies installed
└── README.md               ✅ Documentation
```

### Database Models Created
- ✅ Users & Roles
- ✅ Farmers
- ✅ Milk Collections
- ✅ Inventory Items
- ✅ Products & Recipes
- ✅ Production Batches
- ✅ Sales & Sale Items
- ✅ Returns & Return Items
- ✅ Payments
- ✅ Cheques
- ✅ Expenses

## 🎯 Next Development Phases

### Phase 2: Core Business Modules (To Build Next)
1. **Farmers Module** - Add farmer, daily milk entry
2. **Inventory Module** - Raw materials, stock management
3. **Production Module** - Recipes, batch production
4. **Sales Module** - Route-based sales, invoicing
5. **Returns Module** - Returns and replacements
6. **Payments Module** - Cash/cheque payments
7. **Cheques Module** - Cheque management
8. **Expenses Module** - Daily expenses tracking
9. **Reports Module** - Analytics and reports

### Phase 3: Frontend Setup
- React + TypeScript setup
- Tailwind CSS
- Authentication UI
- Role-based routing

### Phase 4: Real-time Features
- Socket.io integration
- Live updates for sales/inventory

## 🔑 Default Credentials

After creating your first admin user via Prisma Studio or seed script, you can login at:
- **Endpoint**: `POST /api/auth/login`
- **Body**: 
  ```json
  {
    "username": "admin",
    "password": "your-password"
  }
  ```

## 📝 API Testing

Use Postman, Thunder Client (VS Code), or curl:

```bash
# Health check
curl http://localhost:5000/health

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"password123"}'
```

## 🐛 Troubleshooting

### Database Connection Error
- Check PostgreSQL is running
- Verify DATABASE_URL in .env
- Ensure database exists

### Prisma Client Error
- Run `npm run prisma:generate` again

### Port Already in Use
- Change PORT in .env file
- Or kill the process using port 5000

## 📚 Documentation

- Backend README: `backend/README.md`
- Prisma Docs: https://www.prisma.io/docs
- Express Docs: https://expressjs.com/

---

**Status**: ✅ Backend Foundation Complete - Ready for Module Development!


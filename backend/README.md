# Dairy/Yogurt ERP - Backend API

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment Variables
Copy `.env.example` to `.env` and update with your database credentials:
```bash
cp .env.example .env
```

Edit `.env` and set your PostgreSQL connection string:
```
DATABASE_URL="postgresql://username:password@localhost:5432/dairy_erp?schema=public"
JWT_SECRET="your-secret-key-here"
```

### 3. Setup Database
```bash
# Generate Prisma Client
npm run prisma:generate

# Run database migrations
npm run prisma:migrate
```

### 4. Run Development Server
```bash
npm run dev
```

The API will be available at `http://localhost:5000`

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/          # Configuration files (DB, env)
│   ├── middleware/      # Auth, role-based access
│   ├── modules/         # Business logic modules
│   │   ├── auth/
│   │   ├── farmers/
│   │   ├── milk/
│   │   ├── inventory/
│   │   ├── production/
│   │   ├── sales/
│   │   ├── returns/
│   │   ├── payments/
│   │   ├── cheques/
│   │   ├── expenses/
│   │   └── reports/
│   ├── utils/           # Utility functions
│   ├── sockets/         # Socket.io configuration
│   ├── app.js           # Express app setup
│   └── server.js        # Server entry point
├── prisma/
│   └── schema.prisma    # Database schema
└── package.json
```

## 🔐 Authentication

### Login
```bash
POST /api/auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "password123"
}
```

### Register (Admin only)
```bash
POST /api/auth/register
Authorization: Bearer <token>
Content-Type: application/json

{
  "username": "newuser",
  "email": "user@example.com",
  "password": "password123",
  "role": "SALESPERSON",
  "fullName": "John Doe"
}
```

### Get Profile
```bash
GET /api/auth/profile
Authorization: Bearer <token>
```

## 👥 User Roles

- **ADMIN**: Full access to all modules
- **SALESPERSON**: Sales and related operations
- **ACCOUNTANT**: Payments, cheques, expenses
- **PRODUCTION**: Production and inventory management

## 🗄️ Database

### Prisma Studio (Database GUI)
```bash
npm run prisma:studio
```

### Create Migration
```bash
npm run prisma:migrate
```

## 📝 API Endpoints

- `GET /health` - Health check
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - Register new user (Admin only)
- `GET /api/auth/profile` - Get current user profile

More endpoints will be added as modules are developed.

## 🔧 Development

- **Development mode**: `npm run dev` (with nodemon)
- **Production mode**: `npm start`

## 📦 Dependencies

- **Express**: Web framework
- **Prisma**: ORM and database toolkit
- **JWT**: Authentication
- **bcrypt**: Password hashing
- **Socket.io**: Real-time updates
- **Multer**: File uploads
- **Nodemailer**: Email functionality



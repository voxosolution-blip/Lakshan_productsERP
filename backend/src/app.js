// Express App Configuration
import express from 'express';
import cors from 'cors';
import config from './config/env.js';

const app = express();

// Middleware
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, curl, etc.) or from localhost
    if (!origin || origin.startsWith('http://localhost:') || origin.startsWith('http://127.0.0.1:')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Dairy ERP API is running',
    timestamp: new Date().toISOString(),
  });
});

// API Routes
import authRoutes from './modules/auth/auth.routes.js';

app.use('/api/auth', authRoutes);
// app.use('/api/farmers', farmerRoutes);
// app.use('/api/milk', milkRoutes);
// app.use('/api/inventory', inventoryRoutes);
// app.use('/api/production', productionRoutes);
// app.use('/api/sales', salesRoutes);
// app.use('/api/returns', returnsRoutes);
// app.use('/api/payments', paymentsRoutes);
// app.use('/api/cheques', chequesRoutes);
// app.use('/api/expenses', expensesRoutes);
// app.use('/api/reports', reportsRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Route not found' 
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error',
    ...(config.nodeEnv === 'development' && { stack: err.stack }),
  });
});

export default app;


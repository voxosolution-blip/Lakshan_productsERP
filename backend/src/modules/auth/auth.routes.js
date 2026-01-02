// Authentication Routes
import express from 'express';
import { login, register, getProfile } from './auth.controller.js';
import { authenticate } from '../../middleware/auth.js';
import { requireAdmin } from '../../middleware/role.js';

const router = express.Router();

// Public routes
router.post('/login', login);

// Protected routes
router.get('/profile', authenticate, getProfile);
router.post('/register', authenticate, requireAdmin, register);

export default router;



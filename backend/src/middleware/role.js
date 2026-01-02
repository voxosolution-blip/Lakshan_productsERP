// Role-based Access Control Middleware
export const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required.',
      });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `Access denied. Required roles: ${allowedRoles.join(', ')}`,
      });
    }

    next();
  };
};

// Convenience middleware functions
export const requireAdmin = authorize('ADMIN');
export const requireSalesperson = authorize('SALESPERSON', 'ADMIN');
export const requireAccountant = authorize('ACCOUNTANT', 'ADMIN');
export const requireProduction = authorize('PRODUCTION', 'ADMIN');



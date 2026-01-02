// Main App Component
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/common/ProtectedRoute';
import { MainLayout } from './components/layout/MainLayout';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Farmers } from './pages/farmers/Farmers';
import { Milk } from './pages/milk/Milk';
import { Inventory } from './pages/inventory/Inventory';
import { Production } from './pages/production/Production';
import { Sales } from './pages/sales/Sales';
import { Returns } from './pages/returns/Returns';
import { Payments } from './pages/payments/Payments';
import { Cheques } from './pages/cheques/Cheques';
import { Expenses } from './pages/expenses/Expenses';
import { Reports } from './pages/reports/Reports';
import { LoginRoute } from './components/common/LoginRoute';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginRoute />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="farmers" element={<Farmers />} />
        <Route path="milk" element={<Milk />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="production" element={<Production />} />
        <Route path="sales" element={<Sales />} />
        <Route path="returns" element={<Returns />} />
        <Route path="payments" element={<Payments />} />
        <Route path="cheques" element={<Cheques />} />
        <Route path="expenses" element={<Expenses />} />
        <Route
          path="reports"
          element={
            <ProtectedRoute allowedRoles={['ADMIN', 'ACCOUNTANT']}>
              <Reports />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;


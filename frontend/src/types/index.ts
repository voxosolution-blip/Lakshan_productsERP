// TypeScript Types

export type UserRole = 'ADMIN' | 'SALESPERSON' | 'ACCOUNTANT' | 'PRODUCTION';

export interface User {
  id: string;
  username: string;
  email?: string;
  role: UserRole;
  fullName?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    token: string;
  };
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}



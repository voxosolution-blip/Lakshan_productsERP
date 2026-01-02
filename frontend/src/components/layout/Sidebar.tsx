// Sidebar Navigation Component
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  HomeIcon,
  UsersIcon,
  BeakerIcon,
  CubeIcon,
  Cog6ToothIcon,
  ShoppingCartIcon,
  ArrowPathIcon,
  CreditCardIcon,
  DocumentTextIcon,
  ChartBarIcon,
  BanknotesIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';
import logoImage from '../../assets/Logo.png';
import VOXOlogoImage from '../../assets/VOXO_LOGO.png';

interface NavItem {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  roles?: string[];
}

const navigation: NavItem[] = [
  { name: 'Dashboard', path: '/', icon: HomeIcon },
  { name: 'Farmers', path: '/farmers', icon: UsersIcon },
  { name: 'Milk Collection', path: '/milk', icon: BeakerIcon },
  { name: 'Inventory', path: '/inventory', icon: CubeIcon },
  { name: 'Production', path: '/production', icon: Cog6ToothIcon },
  { name: 'Sales', path: '/sales', icon: ShoppingCartIcon },
  { name: 'Returns', path: '/returns', icon: ArrowPathIcon },
  { name: 'Payments', path: '/payments', icon: CreditCardIcon },
  { name: 'Cheques', path: '/cheques', icon: DocumentTextIcon },
  { name: 'Expenses', path: '/expenses', icon: BanknotesIcon },
  { name: 'Reports', path: '/reports', icon: ChartBarIcon, roles: ['ADMIN', 'ACCOUNTANT'] },
];

export const Sidebar = () => {
  const { user, logout } = useAuth();

  const filteredNavigation = navigation.filter((item) => {
    if (!item.roles) return true;
    return item.roles.includes(user?.role || '');
  });

  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-primary-900 to-primary-800 text-white flex flex-col shadow-2xl">
      {/* Logo/Brand */}
      <div className="flex items-center justify-center h-16 px-4 bg-primary-900 border-b border-primary-700">
      {<img src={logoImage} alt="Logo" className="h-12 w-auto object-contain"/>}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {filteredNavigation.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-primary-900 shadow-lg'
                    : 'text-primary-100 hover:bg-primary-700 hover:text-white'
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-primary-700">
        <button
          onClick={logout}
          className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-primary-100 hover:bg-red-600 hover:text-white transition-all duration-200"
        >
          <ArrowRightOnRectangleIcon className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};


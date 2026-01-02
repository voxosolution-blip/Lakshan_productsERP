// Dashboard Page
import {
  UsersIcon,
  BeakerIcon,
  ShoppingCartIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/outline';
import { formatCurrency, formatCurrencySimple } from '../../utils/currency';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  change?: string;
  changeType?: 'positive' | 'negative';
  color: string;
}

const StatCard = ({ title, value, icon: Icon, change, changeType, color }: StatCardProps) => {
  return (
    <div className="card hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          {change && (
            <div className={`flex items-center mt-2 text-sm ${changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
              <ArrowTrendingUpIcon className={`w-4 h-4 mr-1 ${changeType === 'negative' ? 'rotate-180' : ''}`} />
              {change}
            </div>
          )}
        </div>
        <div className={`w-14 h-14 ${color} rounded-xl flex items-center justify-center`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>
    </div>
  );
};

export const Dashboard = () => {
  // Mock data - replace with actual API calls
  const stats = [
    {
      title: 'Total Farmers',
      value: '156',
      icon: UsersIcon,
      change: '+12%',
      changeType: 'positive' as const,
      color: 'bg-blue-500',
    },
    {
      title: 'Today\'s Milk Collection',
      value: '2,450 L',
      icon: BeakerIcon,
      change: '+8%',
      changeType: 'positive' as const,
      color: 'bg-green-500',
    },
    {
      title: 'Today\'s Sales',
      value: formatCurrencySimple(45680),
      icon: ShoppingCartIcon,
      change: '+15%',
      changeType: 'positive' as const,
      color: 'bg-purple-500',
    },
    {
      title: 'Total Revenue',
      value: formatCurrencySimple(1245890),
      icon: CurrencyDollarIcon,
      change: '+22%',
      changeType: 'positive' as const,
      color: 'bg-yellow-500',
    },
    {
      title: 'Pending Payments',
      value: formatCurrencySimple(89450),
      icon: ChartBarIcon,
      change: '-5%',
      changeType: 'negative' as const,
      color: 'bg-red-500',
    },
    {
      title: 'Active Products',
      value: '24',
      icon: BeakerIcon,
      change: '+3',
      changeType: 'positive' as const,
      color: 'bg-indigo-500',
    },
  ];

  return (
    <div className="space-y-6">

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Recent Activity / Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <BeakerIcon className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Milk Collection</p>
                <p className="text-sm text-gray-500">2,450 L collected today</p>
              </div>
              <span className="text-sm text-gray-500">2h ago</span>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <ShoppingCartIcon className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">New Sale</p>
                <p className="text-sm text-gray-500">Sale #1234 - {formatCurrencySimple(5600)}</p>
              </div>
              <span className="text-sm text-gray-500">4h ago</span>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <UsersIcon className="w-5 h-5 text-yellow-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">New Farmer</p>
                <p className="text-sm text-gray-500">Farmer #157 added</p>
              </div>
              <span className="text-sm text-gray-500">1d ago</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-primary-50 hover:bg-primary-100 rounded-lg text-left transition-colors">
              <BeakerIcon className="w-6 h-6 text-primary-600 mb-2" />
              <p className="font-medium text-gray-900">Add Milk Entry</p>
            </button>
            <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg text-left transition-colors">
              <ShoppingCartIcon className="w-6 h-6 text-green-600 mb-2" />
              <p className="font-medium text-gray-900">New Sale</p>
            </button>
            <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-left transition-colors">
              <UsersIcon className="w-6 h-6 text-blue-600 mb-2" />
              <p className="font-medium text-gray-900">Add Farmer</p>
            </button>
            <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg text-left transition-colors">
              <ChartBarIcon className="w-6 h-6 text-purple-600 mb-2" />
              <p className="font-medium text-gray-900">View Reports</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


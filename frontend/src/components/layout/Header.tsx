// Header Component
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPageInfo } from '../../utils/pageInfo';

export const Header = () => {
  const location = useLocation();
  const pageInfo = getPageInfo(location.pathname);

  const [dateTime, setDateTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="bg-gradient-to-r from-primary-900 to-primary-800 shadow-sm border-b border-primary-700 h-16 flex items-center justify-center px-6 relative">
      
      {/* Center Title */}
      <div className="text-center">
        <h1 className="text-xl font-bold text-white">LAKSHAN-products</h1>
        <p className="text-xs text-primary-200">ERP System by VOXOsolution</p>
      </div>

      {/* Left Page Info */}
      <div className="absolute left-6">
        <h2 className="text-lg font-bold text-white">{pageInfo.title}</h2>
        <p className="text-xs text-primary-200">{pageInfo.description}</p>
      </div>

      {/* Right Date & Time */}
      <div className="absolute right-6 text-right">
        <p className="text-sm font-semibold text-white">
          {dateTime.toLocaleDateString('en-GB', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </p>
        <p className="text-xs text-primary-200">
          {dateTime.toLocaleTimeString()}
        </p>
      </div>

    </header>
  );
};

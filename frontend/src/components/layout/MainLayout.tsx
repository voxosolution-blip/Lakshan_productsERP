// Main Layout Component with Sidebar
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Footer } from './Footer';
import logoImage from '../../assets/Logo.png';

export const MainLayout = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64 overflow-hidden relative">
        {/* Background Logo Overlay - 50% opacity, centered in main content area */}
        <div 
          className="absolute z-0 pointer-events-none"
          style={{
            top: '150px',
            bottom: '60px',
            left: '0',
            right: '0',
            backgroundImage: `url(${logoImage})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.5,
          }}
        />
        <Header />
        <main className="flex-1 overflow-y-auto p-6 relative z-10">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};


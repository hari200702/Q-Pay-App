import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  HomeIcon, 
  QrCodeIcon, 
  ClockIcon, 
  UserCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import bottomLogo from "../assets/bottom.png";

const Sidebar = ({ onCloseSidebar }) => {
  const menuItems = [
    { path: '/', label: 'Home', icon: HomeIcon },
    { path: '/qr', label: 'QR', icon: QrCodeIcon },
    { path: '/history', label: 'History', icon: ClockIcon },
    { path: '/profile', label: 'Profile', icon: UserCircleIcon }
  ];

  const handleNavClick = () => {
    if (window.innerWidth < 1024) {
      onCloseSidebar?.();
    }
  };

  return (
    <aside 
      className="w-64 lg:w-56 h-full flex flex-col" 
      style={{ backgroundColor: '#4A8B5C' }}
    >
      <div className="p-6 flex items-center justify-between">
        <div className="text-white text-2xl font-bold flex items-center">
          <span 
            className="bg-white w-10 h-10 rounded-lg flex items-center justify-center mr-2 font-bold text-3xl" 
            style={{ color: '#4A8B5C' }}
          >
            Q
          </span>
          <span>Pay</span>
        </div>
        <button
          onClick={onCloseSidebar}
          className="lg:hidden text-white hover:bg-green-700 hover:bg-opacity-50 p-2 rounded-lg"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
      </div>
      <nav className="flex-1 px-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={handleNavClick}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 mb-2 rounded-lg transition-all ${
                  isActive
                    ? 'bg-white'
                    : 'text-white hover:bg-green-700 hover:bg-opacity-50'
                }`
              }
              style={({ isActive }) => 
                isActive 
                  ? { color: '#4A8B5C' }
                  : {}
              }
            >
              <Icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
      <div className="bg-white py-4 flex items-center justify-center">
        <img 
          src={bottomLogo} 
          alt="Bharat Connect Logo" 
          className="h-8 lg:h-10 object-contain"
        />
      </div>
    </aside>
  );
};

export default Sidebar;

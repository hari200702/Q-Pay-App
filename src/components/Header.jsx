import React from 'react';
import { useAppContext } from '../context/AppContext';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const { user } = useAppContext();

  return (
    <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between">
      <div className="flex items-center">
        {/* Logo placeholder */}
      </div>
      
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-600">Hello</span>
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-gray-600 font-medium">
              {user.name.charAt(0)}
            </span>
          </div>
          <span className="font-medium text-gray-800">{user.name}</span>
          <ChevronDownIcon className="w-4 h-4 text-gray-600 flex-shrink-0" />
        </div>
      </div>
    </header>
  );
};

export default Header;
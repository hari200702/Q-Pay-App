import React from 'react';
import { useAppContext } from '../context/AppContext';
import { ChevronDownIcon, Bars3Icon } from '@heroicons/react/24/outline';

const Header = ({ onToggleSidebar }) => {
  const { user } = useAppContext();

  return (
    <header className="h-16 bg-white border-b border-gray-200 px-4 lg:px-6 flex items-center justify-between">
      <div className="flex items-center">
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
        >
          <Bars3Icon className="w-6 h-6 text-gray-600" />
        </button>
        <div className="lg:hidden ml-3 text-green-600 text-xl font-bold">
          QPay
        </div>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-4">
        <span className="text-sm text-gray-600 hidden sm:inline">Hello</span>
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-gray-600 font-medium text-sm lg:text-base">
              {user.name.charAt(0)}
            </span>
          </div>
          <span className="font-medium text-gray-800 text-sm lg:text-base hidden sm:inline">
            {user.name}
          </span>
          <ChevronDownIcon className="w-4 h-4 text-gray-600 flex-shrink-0" />
        </div>
      </div>
    </header>
  );
};

export default Header;

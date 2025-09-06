import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar'
import Header from './Header';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {isSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        />
      )}
      <div className="flex h-screen lg:p-4 lg:gap-4">
        <div className={`
          fixed lg:static inset-y-0 left-0 z-50
          transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 transition-transform duration-300 ease-in-out
          bg-white lg:rounded-2xl shadow-lg overflow-hidden
        `}>
          <Sidebar onCloseSidebar={closeSidebar} />
        </div>
        <div className="flex-1 flex flex-col bg-white lg:rounded-2xl lg:shadow-lg overflow-hidden">
          <Header onToggleSidebar={toggleSidebar} />
          <main className="flex-1 overflow-y-auto p-4 lg:p-6 bg-gray-50">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;

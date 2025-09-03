import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './SideBar';
import Header from './Header';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen p-4 gap-4">
        {/* Floating Sidebar */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <Sidebar />
        </div>
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
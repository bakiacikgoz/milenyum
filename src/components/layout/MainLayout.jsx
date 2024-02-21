import React from 'react';
import Sidebar from './Sidebar'; 
import './MainLayout.css'; 

const MainLayout = ({ children }) => {
  return (
    <div className="mainLayout">
      <Sidebar />
      <div className="content p-4 sm:ml-64">
        {children} 
      </div>
    </div>
  );
};

export default MainLayout;

import React from 'react';
import Sidebar from './Sidebar'; 
import './MainLayout.css'; 

const MainLayout = ({ children }) => {
  return (
    <div className="mainLayout dark:bg-slate-700">
      <Sidebar />
      <div className="content p-4 sm:ml-64">
        {children} 
      </div>
    </div>
  );
};


export default MainLayout;

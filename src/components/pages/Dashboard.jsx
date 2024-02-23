import React from 'react';
import MainLayout from '../layout/MainLayout';
import ThemeToggleButton from '../common/ThemeToggleButton';


const Dashboard = () => {
  return (
    <MainLayout>
      <div className="max-w-7x1 mx-auto">
          <div className="flex flex-wrap ">
            <div className="w-full lg:w-2/12">
                <div className="flex flex-wrap bg-white text-dark rounded p-3 hover:bg-slate-50 cursor-pointer shadow-lg font-thin dark:bg-slate-800  dark:hover:bg-slate-700 dark:text-white">
                  <div className="w-1/2 flex  items-center pl-2"><h1 className='text-2xl'>logo</h1></div>
                  <div className="w-1/2  text-right pr-2"><h6 className='text-3xl font-bold'>0</h6> <span>ürün</span></div>
                </div><ThemeToggleButton/>
            </div>
          </div>
      </div>
      
    </MainLayout>
  );
};

export default Dashboard;
import React from 'react';
import MainLayout from '../layout/MainLayout';
import ThemeToggleButton from '../common/ThemeToggleButton';
import DashButton from '../common/DashButton';

const Dashboard = () => {
  return (
    <MainLayout>
      <div className=" mx-auto">
          <div className="flex flex-wrap ">
            <div className="w-full lg:w-2/12 p-1">
                <DashButton logo="Ben" icerik={<><h6 className='text-3xl font-bold'>0</h6> <span>ürün</span></>}/>
            </div>
            <div className="w-full lg:w-2/12 p-1">
                <DashButton logo="Ben" icerik={<><h6 className='text-3xl font-bold'>0</h6> <span>ürün</span></>}/>
            </div>
            <div className="w-full lg:w-2/12 p-1">
                <DashButton logo="Ben" icerik={<><h6 className='text-3xl font-bold'>0</h6> <span>ürün</span></>}/>
            </div>
          </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
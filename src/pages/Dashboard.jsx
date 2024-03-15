import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Home from './Home';
import Upload from './Upload';
import Mark from './Mark'

function Dashboard() {
  return (
    <div className='w-screen bg-blue-50 h-screen overflow-hidden'>
      <div className="flex flex-row">
        <Sidebar/>
        <div className="flex flex-col w-full">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/mark" element={<Mark />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 h-screen">
      <div className="md:col-span-1">
        <Sidebar />
      </div>
      <div className="md:col-span-5">
        <Header />
      </div>
    </div>
  );
}

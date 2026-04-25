import React from "react";

function NotFound() {
  return (
    <div className='flex items-center text-white justify-center gap-4 min-h-screen'>
      <p className='p-2 pr-6 border-r border-blue-600 text-4xl font-bold'>404</p>
      <h1 className='text-sm'>This page could not be found.</h1>
      <p className='absolute bottom-10 text-xs text-blue-500/50'>© {new Date().getFullYear()} Ajmal H. All rights reserved.</p>
    </div>
  );
}

export default NotFound;

import React from 'react'

function Github() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-sm">
      <div className='flex items-center gap-3'>
        <span className='animate-pulse text-lg'>🏗️</span>
        <span className='h-8 w-0 text-blue-500 border-l'></span>
        <h3 className='text-white/70'>This project is under development...</h3>
      </div>
      <p className='absolute bottom-10 text-xs text-blue-500/50'>© {new Date().getFullYear()} Ajmal H. All rights reserved.</p>
    </div>
  );
}

export default Github;

import React from 'react'

function Projects() {
  return (
    <div>
      <div className="max-w-7xl sm:ml-20 md:ml-20 lg:ml-50 px-2">

        {/* Dash */}
        <div
          className='inline-flex mt-10'>
          <span className='border-2 border-blue-300 h-0 w-20 rounded-full'></span>
        </div>

        {/* Projects heading */}
        <h1 className='text-5xl sm:text-7xl font-extrabold tracking-tight text-white mt-2 mb-5'>Projects</h1>

        <p className="max-w-3xl text-white/60 mb-6">Explore my work primarily focuses on building responsive and user-friendly web applications using technologies like React, Vite, and Tailwind CSS </p>

        {/* Project's filter */}
        <div className='text-sky-700'>Filter</div>

        {/* Project's container */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 text-green-700'>Projects coming soon...</div>
      </div>
    </div>
  )
}

export default Projects

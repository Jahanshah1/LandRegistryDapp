import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-[#1F2833] p-4 flex justify-between">
    <div className="flex items-center">
      <a href="/">
        <h1 className='text-white text-2xl border p-2'>DLRP</h1>
      </a>
    </div>
    <div className="flex items-center">
      <a href="/" className="text-white mr-4 hover:text-gray-300">
        Home
      </a>
      <a href="/application" className="text-white mr-4 hover:text-gray-300">
        Application
      </a>
      <a href="/map" className="text-white hover:text-gray-300">
        Map
      </a>
    </div>
  </nav>

  )
}

export default Navbar;

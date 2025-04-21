import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full p-14 flex justify-center align-middle items-center h-32 bg-amber-300">
        <nav className="h-12 bg-green-500 text-white p-2 gap-x-6 flex">
          <div className="w-8 bg-cyan-700 flex justify-center align-middle items-center">
            a
          </div>
          <div className="w-8 bg-cyan-700 flex justify-center align-middle items-center">
            b
          </div>
          <div className="w-8 bg-cyan-700 flex justify-center align-middle items-center">
            c
          </div>
          <div className="w-8 bg-cyan-700 flex justify-center align-middle items-center">
            d
          </div>
        </nav>
      </div>
  )
}

export default Navbar
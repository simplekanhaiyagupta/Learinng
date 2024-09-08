import React, { useState } from 'react';
 


const Nav = ()=>{
  const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    
        return(
        <>
<section>

 
<nav className="bg-[#000000] text-[#ffffff] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-bold">Online <strong className='text-[#22ff30]'>Learning</strong></a>
          </div>

          {/* Full Menu (Desktop) */}
          <div className="hidden md:flex md:space-x-8 md:items-center">
            <a href="#" className="font-sans hover:bg-green-700 px-3 py-2 rounded-md">Home</a>
            <a href="#" className="hover:bg-green-700 px-3 py-2 rounded-md">Courses</a>
            <a href="#" className="hover:bg-green-700 px-3 py-2 rounded-md">Practice</a>
            <a href="#" className="hover:bg-green-700 px-3 py-2 rounded-md">About</a>
            
            {/* <Link  to="/about"  className="hover:bg-green-700 px-3 py-2 rounded-md " > Abouts</Link> */}
            {/* Search Box */}
            <div className="relative">
              <input type="text" placeholder="Search..." className="px-3 py-1 rounded-full text-black w-48" />
              <button className="absolute right-0 top-0 mt-1 mr-2 text-black">
                <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M21.71 20.29l-3.4-3.39a8 8 0 10-1.42 1.41l3.39 3.4a1 1 0 001.41-1.42zM4 10a6 6 0 1112 0 6 6 0 01-12 0z" />
                </svg>
              </button>
            </div>

            {/* Login Button */}
            <a href="#" className="bg-white text-green-600 hover:bg-green-700 hover:text-white px-4 py-2 rounded-md">Login</a>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none">
              {isOpen ? (
                <svg className="block w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block px-4 py-2 text-white hover:bg-green-700">Home</a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-green-700">Courses</a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-green-700">Practice</a>
          {/* <Link to="/About" className="block px-4 py-2 text-white hover:bg-green-700">About</Link> */}

          {/* Search Box in Mobile */}
          <div className="px-4 py-2">
            <input type="text" placeholder="Search..." className="px-3 py-1 rounded-full text-black w-full" />
          </div>

          {/* Login Button */}
          <a href="#" className="block px-4 py-2 w-32 text-center  sm:w-7  mt-2 text-green-600 bg-white rounded-md">Login</a>
  
        
        </div>
      )}
    </nav>
</section>
         
        </>
    )
}
export default Nav;
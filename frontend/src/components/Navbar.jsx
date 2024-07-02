import React from 'react'

const Navbar = () => {
  return (
    <nav className='container'>
      <div className='logo'>MyDoctor</div>
      <div className={show ? "navlinks showmenu" : "navLinks"}>
        
      </div>
    </nav>
  )
}

export default Navbar

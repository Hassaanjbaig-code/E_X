import React from 'react'

const Navbar = () => {
    const navlink = [
        'Home',
        'About',
        'Contact us',
    ]
  return (
    <nav className='w-full'>
      <ul className='Navbar'>
        {navlink.map((str) => (
            <li className='mr-5 hover:text-blue-200 cursor-pointer'>{str}</li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar

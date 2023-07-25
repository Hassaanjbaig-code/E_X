import React from 'react'

const Navbar = () => {
    const navlink = [
        'Home',
        'About',
        'Contact us',
    ]
  return (
    <nav className='w-full'>
      <ul className='flex flex-1 flex-row-reverse'>
        {navlink.map((str) => (
            <li className='mr-5'>{str}</li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar

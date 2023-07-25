import React from 'react'

const Navbar = () => {
    const navlink = [
        {id: 1, name:'Home'},
        {id: 2, name:'About'},
        {id: 3, name:'Contact us'},
    ]
  return (
    <nav className='w-full'>
      <ul className='Navbar'>
        {navlink.map((str) => (
            <li key={str.id} className='mr-5 hover:text-blue-200 cursor-pointer'>{str.name}</li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar

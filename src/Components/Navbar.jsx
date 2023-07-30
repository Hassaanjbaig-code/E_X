import React from 'react'

const Navbar = () => {
    const navlink = [
        {id: 1, name:'Home', path: '/'},
        {id: 2, name:'About', path: '/about'},
        {id: 3, name:'Contact us', path: '/contact'},
        {id: 4, name:'Log In', path: '/login'},
    ]
  return (
    <nav className='w-full'>
      <ul className='Navbar'>
        {navlink.map((str) => (
            <li key={str.id} className='mr-5 hover:text-blue-200 cursor-pointer'>
              <a className='decoration-slice' href={str.path}>{str.name}</a>
            </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar

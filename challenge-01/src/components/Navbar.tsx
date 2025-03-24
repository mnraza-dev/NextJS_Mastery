import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <div>
          <h1>LOGO</h1>
        </div>
        <div>
          <Link className='bg-blue-500 text-white mr-2 p-1' href={'/'}>Home</Link>
          <Link className='bg-blue-500 text-white mr-2 p-1' href={'/about'}>About</Link>
          <Link className='bg-blue-500 text-white mr-2 p-1' href={'/portfolio'}>Portfolio</Link>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
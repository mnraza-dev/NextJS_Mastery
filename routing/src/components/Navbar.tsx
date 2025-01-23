import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-start p-4 px-8 gap-3 items-center  bg-black/50 backdrop-blur-sm text-white fixed top-0 left-0 w-full z-50'>
        <Link href="/" className='font-bold text-lg'>Home</Link>
        <Link href="/stats">Stats</Link>
        <Link href="/performance">Performance</Link>
    </nav>
  )
}

export default Navbar
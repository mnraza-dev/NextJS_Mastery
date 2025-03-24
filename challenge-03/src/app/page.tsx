'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const Home = () => {
  const router = useRouter()

  const navigate = (page: string) => {
    router.push(`/${page}`);
  }
  return (
    <div>

      <nav className='max-w-full text-black bg-amber-500 text-2xl'>
        <div className='flex gap-2 p-4'>

        
          <button className='cursor-pointer' onClick={() => navigate('colors')}>colors</button>
          <button className='cursor-pointer' onClick={() => navigate('login')}>login</button>

        </div>
      </nav>

      <h1>This is home page</h1>

    </div >
  )
}

export default Home
'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const Home = () => {
  const router = useRouter()
  return (
    <div>

      <nav className='max-w-full text-black bg-amber-500 text-2xl'>
        <div className='flex gap-2 p-4'>

          <div className='cursor-pointer'>
            <button onClick={() => router.push('/login')}>login</button></div>
        </div>
      </nav>

      <h1>This is home page</h1>

    </div >
  )
}

export default Home
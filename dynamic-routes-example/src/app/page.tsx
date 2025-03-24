'use client'

import { useRouter } from 'next/navigation'
import React from 'react'


const Home = () => {
  const router = useRouter()
  return (
    <div className='m-8 flex flex-col justify-between items-center'>
      <h1 className='text-4xl'>Home</h1>

      <button className='mt-4 text-xl p-2 text-black rounded-lg cursor-pointer bg-amber-400 hover:bg-amber-500' onClick={() => { router.push('/userlist') }}>Go to User List</button>
    </div>
  )
}

export default Home
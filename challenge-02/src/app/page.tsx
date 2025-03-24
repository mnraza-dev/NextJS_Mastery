import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='p-6 flex flex-col justify-center items-center  h-screen mx-auto '>
      <h1 className='text-4xl'>Welcome to Home  Page</h1>

      <div className='h-[400px] '>
        <p className='mb-4 text-xl  font-light' >This is landing page of this website </p>
        <Link href="/dashboard" className='bg-blue-400 text-white rounded-sm p-1 hover:bg-blue-600' >Go to Dashboard</Link>
      </div>
    </div>
  )
}

export default Home
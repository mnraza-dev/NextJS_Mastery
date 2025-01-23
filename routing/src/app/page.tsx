import Image from 'next/image'
import React from 'react'
import gym from "@/images/gym.jpg"

const Home = () => {
  return (
    <div className='relative w-full h-screen'>
      <Image src={gym} alt="logo" className='w-full h-full object-cover' fill/>
    
    </div>
  )
}

export default Home
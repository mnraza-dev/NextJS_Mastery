import { Button } from '@/components/ui/button'
import React from 'react'

const Home = () => {
  return (
    <div className=''>
      <h1 className='text-4xl font-semibold'>  Home</h1>

      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-light'>  Snippets</h1>
        <Button variant='outline' className='cursor-pointer' >
          Create Snippet
        </Button>
      </div>

    </div>
  )
}

export default Home
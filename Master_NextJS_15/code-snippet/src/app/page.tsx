import { Button } from '@/components/ui/button'
import React from 'react'

const Home = () => {
  return (
    <div className=''>
      <div className='flex justify-between items-center'>
        <h1>  Snippets App</h1>
        <Button variant='outline' >
          Create Snippet
        </Button>
      </div>

    </div>
  )
}

export default Home
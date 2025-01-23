import { Button } from '@/components/ui/button'
import React from 'react'

const HomePage = () => {
  return (
    <div className="flex p-5 justify-between h-screen">
      <h1>Code <span className="text-red-500">Snippets</span> </h1>
      <Button>Add Snippet</Button>
    </div>
  )
}

export default HomePage
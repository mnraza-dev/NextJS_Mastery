"use client";

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

const HomePage = () => {
  const router = useRouter()
  return (
    <div className="flex p-5 justify-between h-screen">
      <h1>Code <span className="text-red-500">Snippets</span> </h1>
      <Button title='Add Snippet'  onClick={()=>{
        router.push('/snippets/new')
      }}>Add Snippet</Button>
    </div>
  )
}

export default HomePage
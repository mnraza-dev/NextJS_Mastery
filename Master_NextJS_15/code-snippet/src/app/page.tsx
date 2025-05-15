import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'
const Home = async () => {
  const snippets = await prisma.code_snippet.findMany();
  console.log('Snippets', snippets)
  return (
    <div>
      <h1 className='text-4xl font-semibold'>  Home</h1>
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-light'>  Snippets</h1>
        <Link href={"/snippet/new"}>
          <Button size={'lg'} className='cursor-pointer mt-4 bg-amber-300 w-full'> Create Snippet</Button>
        </Link>
      </div>
      <div className='flex flex-col items-center justify-center '>
        {
          !snippets.length ? (
            <div className='flex flex-col items-center justify-center h-full'>
              <h1 className='text-2xl font-semibold'> No Snippets Found</h1>
              <Link href={"/snippet/new"}>
                <Button size={'lg'} className='cursor-pointer mt-4 bg-amber-300 w-full'> Create Snippet</Button>
              </Link>
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {snippets.map((snippet) => (
                <Link href={`/snippet/${snippet.id}`} key={snippet.id} className='bg-amber-300 hover:bg-amber-400 shadow-md rounded-2xl py-8 px-16 hover:shadow-lg transition-shadow duration-300'>
                  <h2 className='text-lg  text-black font-semibold'>{snippet.title}</h2>
                  <Button variant='link' className='mt-2 w-full cursor-pointer text-black '>View </Button>
                </Link>
              ))}
            </div>
          )
        }
      </div>
    </div>
  )
}
export default Home
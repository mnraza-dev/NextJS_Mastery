import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/prisma'
import { CopyIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Home = async () => {
  const snippets = await prisma.code_snippet.findMany();
  console.log('Snippets', snippets)
  return (
    <div className=''>
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
                <Link href={`/snippet/${snippet.id}`} key={snippet.id} className='bg-white shadow-md rounded-2xl p-4 hover:shadow-xl transition-shadow duration-300'>
<div className='flex items-center justify-between'>
                    <h2 className='text-xl text-green-800 font-semibold'>{snippet.title}</h2>
                  <CopyIcon className='w-5 h-5 text-gray-800' />
</div>
                  <div className='h-[200px] overflow-auto'>
                    <pre className='text-gray-600'>{snippet.code}</pre>
                  </div>
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
import React from 'react'

const SnippetDetailPage = async ({params}:{params:Promise<{slug:string}>}) => {
    const { slug } = await params;
    console.log('Slug', slug)
  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <h1 className='text-2xl font-semibold'> Snippet Detail</h1>
        <div className='flex flex-col items-center justify-center h-full'>
           
        </div>
    </div>
  )
}

export default SnippetDetailPage
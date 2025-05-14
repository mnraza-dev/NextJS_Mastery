import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import React from 'react'

const CreateSnippetPage = () => {
  async function createSnippet(formData: FormData) {
    "use server"
    const title = formData.get('title') as string
    const code = formData.get('code') as string
    const res = await prisma.code_snippet.create({
      data: {
        title,
        code
      }
    })
    console.log('Snippet created',res )
    redirect('/');
  }
  return (
    <div className='flex items-center flex-col justify-center h-[80vh] '>
      <form action={createSnippet} >
        <div>  <Label htmlFor='title'> Title</Label>
          <Input
            name='title'
            id='title'
            type='text'
            placeholder='Enter title'
            className='w-full max-w-xs mt-2 mb-2'
          /></div>
        <div>
          <Label htmlFor='code'> Code</Label>
          <Textarea
            name='code'
            id='code'
            placeholder='Enter code'
            className='w-full max-w-xs mt-2'
            rows={10}
          /></div>
        <Button size={'lg'} className='cursor-pointer mt-4 bg-amber-300 w-full'>Add New Snippet</Button>

      </form>

    </div>
  )
}

export default CreateSnippetPage
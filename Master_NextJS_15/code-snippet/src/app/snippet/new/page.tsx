import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const CreateSnippetPage = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <form>
        <div>  <Label> Title</Label>
          <Input
            type='text'
            placeholder='Enter title'
            className='w-full max-w-xs mt-2'
          /></div>
        <div>   <Label> Code</Label>
          <Textarea
            placeholder='Enter code'
            className='w-full max-w-xs mt-2'
            rows={10}
          /></div>
        <Button size={'lg'} className='mt-4 bg-amber-300 w-full'>Add New Snippet</Button>

      </form>

    </div>
  )
}

export default CreateSnippetPage
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const CreateSnippetPage = () => {
    return (
        <div>
            <h1>Create Snippet</h1>
            <div>   <Label>Title</Label>
                <Input type='text' placeholder='Title' /></div>
            <div>     <Label>Code</Label>
                <Textarea placeholder='Code' /></div>
            <Button className='mt-5' title='Create Snippet' >Create Snippet</Button>
        </div>
    )
}

export default CreateSnippetPage
'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const CreateSnippetPage = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Form submitted')
    }
    return (
        <div className='h-screen flex justify-center items-center'>
            <form onSubmit={handleSubmit} className='m-5  flex flex-col gap-2 p-5 rounded-md  shadow-xl w-1/2'>
                <h1 className='text-2xl font-bold text-center'>Create Snippet</h1>
                <div className='flex flex-col gap-2'>
                    <Label>Title</Label>
                    <Input type='text' placeholder='add a Title here...' /></div>
                <div className='flex flex-col gap-2'>
                    <Label>Code</Label>
                    <Textarea placeholder='Code here...' /></div>
                <Button type='submit' className='mt-5' title='Create Snippet' >Create Snippet</Button>
            </form>
        </div>
    )
}

export default CreateSnippetPage
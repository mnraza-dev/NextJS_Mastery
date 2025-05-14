"use client"
import React, { useState } from 'react'
import Editor from '@monaco-editor/react';
import type { code_snippet } from '@/generated/prisma';
import { Button } from './ui/button';
import { saveSnippet } from '../actions'


const EditSnippetForm = ({ res }: { res: code_snippet }) => {
    const [code, setCode] = useState(res.code)
    const saveSnippetAction = saveSnippet.bind(null, res.id, code)
    const changeEventHandler = (value: string ="") => {
        setCode(value)
    }
    return (
        <div >
            <form action={saveSnippetAction} className='flex items-center justify-between mb-2'>
                <h1 className='text-3xl font-semibold'>Your Code Editor</h1>
                <Button className='bg-amber-300 cursor-pointer hover:bg-amber-400' type='submit'>
                    Save
                </Button>
            </form>
            <Editor height="84vh"
                theme='vs-dark'
                defaultLanguage="javascript"
                defaultValue={code}
                className='w-full'
                onChange={changeEventHandler} />
        </div>
    )
}

export default EditSnippetForm
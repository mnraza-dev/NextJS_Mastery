"use client"
import React, { useState } from 'react'
import Editor from '@monaco-editor/react';
import type { code_snippet } from '@/generated/prisma';

const EditSnippetForm = ({ res }: { res: code_snippet }) => {
    const [code, setCode] = useState(res.code)
    return (
        <div>
            <Editor height="90vh" 
            defaultLanguage="javascript" 
            defaultValue={code} />
        </div>
    )
}

export default EditSnippetForm
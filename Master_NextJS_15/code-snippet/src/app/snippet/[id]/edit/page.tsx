import EditSnippetForm from '@/components/EditSnippetForm'
import { prisma } from '@/lib/prisma'
import React from 'react'

const EditSnippetPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = parseInt((await params).id)
    const res = await prisma.code_snippet.findUnique({
        where: {
            id
        }
    })
    if (!res) {
        return (
            <div className='flex flex-col items-center justify-center h-full'>
                <h1 className='text-2xl font-semibold'> Snippet Not Found</h1>
            </div>
        )
    }
    <>
        <EditSnippetForm res={res} />
    </>
}

export default EditSnippetPage
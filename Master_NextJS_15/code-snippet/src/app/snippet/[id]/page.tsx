import { prisma } from '@/lib/prisma'
import React from 'react'
interface SnippetDetailPageProps {
    params: Promise<{ id: string }>
}
const SnippetDetailPage = async ({ params, }: SnippetDetailPageProps) => {
    const id = parseInt((await params).id)
    const res = await prisma.code_snippet.findUnique({
        where: {
            id
        }
    })

    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <h1 className='text-2xl font-semibold'> Snippet Detail</h1>
            <div className='flex flex-col items-center justify-center h-full'>
               <h1 className='text4xl font-semibold'> {res?.title}</h1>
            </div>
        </div>
    )
}

export default SnippetDetailPage
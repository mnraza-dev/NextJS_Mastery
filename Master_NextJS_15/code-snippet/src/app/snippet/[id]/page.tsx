import { prisma } from '@/lib/prisma'
import { CopyIcon } from 'lucide-react'
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
    if (!res) {
        return (
            <div className='flex flex-col items-center justify-center h-full'>
                <h1 className='text-2xl font-semibold'> Snippet Not Found</h1>
            </div>
        )
    }
    return (
        <div className='flex flex-col h-full'>
            <h1 className='text-2xl font-semibold'> Snippet Detail</h1>
            <hr className='my-4 border-2 border-amber-200' />
            <div className='flex flex-col   h-full'>

                <h1 className='text4xl font-semibold mb-2' > {res?.title}</h1>
                <div className='h-[60vh] overflow-auto relative'>
                    <CopyIcon className='absolute top-4 right-4 w-6 h-6 cursor-pointer text-gray-600 hover:text-green-600' />
                    <pre className='text-gray-600'>{res?.code}</pre>
                </div>
            </div>
        </div>
    )
}

export default SnippetDetailPage
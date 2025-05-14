import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/prisma'
import { CopyIcon, EditIcon,  Trash2Icon } from 'lucide-react'
import Link from 'next/link'
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
        <div className='flex flex-col h-screen '>
            <div className='flex flex-col flex-grow'>
                <div>
                    <div className=' flex items-center justify-between bg-amber-300 shadow-md rounded-2xl py-8 px-16 hover:shadow-lg transition-shadow duration-300'>
                        <h1 className='text-3xl font-light ' > {res?.title}</h1>

                        <div className='flex gap-2'>
                            <Link href={`/snippet/${res.id}/edit`}>
                                <Button variant={'outline'} className='bg-black/80 text-white hover:bg-black/90 cursor-pointer' size={'lg'} >
                                    <EditIcon className='w-4 h-4 mr-2' /> Edit
                                </Button>
                            </Link>
                            <Button className='bg-red-500 text-white hover:bg-red-600 cursor-pointer' size={'lg'} >
                                <Trash2Icon className='w-4 h-4 mr-2' /> Delete
                            </Button>
                        </div>
                    </div>
                    <hr className='my-4 border-2 border-amber-200' />

                </div>
                <div className='h-full overflow-auto relative p-4 bg-amber-100'>
                    <CopyIcon className='absolute top-4 right-4 w-6 h-6 cursor-pointer text-gray-600 hover:text-green-600' />
                    <pre className='text-gray-600'>{res?.code}</pre>
                </div>
            </div>
        </div>
    )
}

export default SnippetDetailPage
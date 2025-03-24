import React from 'react'

const User = async ({ params }: { params: { user: string } }) => {
    const { user } = await params
    return (
        <div>
            <h1>Info about user : <span className='text-red-500'>{user}</span></h1>
            <h2>Hello, I'm {user}</h2>
        </div>
    )
}

export default User
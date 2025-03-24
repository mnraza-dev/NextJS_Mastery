import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
    return (
        <div className='max-w-full'>
            <nav className='bg-amber-300 text-black p-4 '>
                <ul className='flex items-center gap-2'>
                    <li>
                        <Link className='text-2xl rounded-sm p-1' href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link className=' text-2xl  rounded-sm p-1' href={"/dashboard/settings"}>Settings</Link>
                    </li>
                    <li>
                        <Link className=' text-2xl rounded-sm p-1' href={"/dashboard/profile"}>Profile</Link>
                    </li>
                </ul>
            </nav>
            <h1 className='text-4xl mt-4 text-center'>This is Dashboard</h1>

        </div>
    )
}

export default Dashboard
import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
    return (
        <div>
            <h1>This is Dashborad</h1>
            <nav>
                <ul className='flex items-center gap-2'>
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/dashboard/settings"}>Settings</Link>
                    </li>
                    <li>
                        <Link href={"/dashboard/profile"}>Profile</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Dashboard
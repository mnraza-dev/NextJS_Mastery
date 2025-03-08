import React from 'react'

type Params = Promise<{ slug: string }>;

const DashboardRoute = ({ params }: { params: Params }) => {

    return (
        <div>Dashboard Route</div>
    )
}

export default DashboardRoute
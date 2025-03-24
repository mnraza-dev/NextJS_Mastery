import React from 'react'

const User = async ({params}:{params:{user:string}}) => {
    return (
        <div>
            <h1>User name is : {params.user}</h1>
        </div>
    )
}

export default User
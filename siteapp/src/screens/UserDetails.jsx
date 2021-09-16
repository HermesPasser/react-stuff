import React from 'react'
import { useParams } from 'react-router'

const users = [
    {id: 1, name: 'Jhon Doe', desc: 'He does not exists'},
    {id: 2, name: 'Mr Nobody', desc: 'Nobody knows him'}
]

export default function UsersDetails(props) {
    let { id: idStr } = useParams()
    const id = parseInt(idStr)
    const user = users.find(u => u.id === id)

    return (
        <div className="details">
            <h1>{user.name}</h1>
            <h1>{user.desc}</h1>
        </div>
    )
}
import React from 'react'
import { Link } from 'react-router-dom'

export default function Users(props) {
    return (
        <div className="users">
            <h1>Users</h1>
            <ul>
                <li>
                    <Link to="/usrs/1/details">
                        Jhon Doe
                    </Link>
                </li>
                <li>
                    <Link to="/usrs/2/details" >
                        Mr Nobody
                    </Link>
                </li>
            </ul>
        </div>
    )
}
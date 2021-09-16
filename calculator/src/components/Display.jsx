import React from 'react'

export default function Display({ value }) {
    return (
        <div className="dislay">
            <span>{value || 0 }</span>
        </div>
    )
}

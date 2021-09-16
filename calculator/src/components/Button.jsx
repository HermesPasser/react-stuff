import React from 'react'

export default function Button({ label, size = 1, op, onClick }) {
    const className = `btn btn-${size} ` + (op ? 'operation' : '')
    function handleClick() { onClick(label) }

    return (
        <button onClick={handleClick} className={className}>{ label }</button>
    )
}

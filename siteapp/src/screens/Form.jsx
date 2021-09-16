import React, { useState } from "react";

export default function Form() {
    const [email, setEmail] = useState(0)
    const [allowed, setAllowed] = useState(true)
    const handleEmailChange = (evt) => {
        setEmail(evt.target.value)
    }
    const handleCheckboxChecked = (evt) => {
        setAllowed(evt.target.checked)

    }
    const submit = (evt) => {
        evt.preventDefault()
        alert('Sent')
    }
    return (
        <form className="form" onSubmit={submit}>
            <h1>Inscreva-se na newsletter</h1>
            <p><input 
                type="email" 
                value={email} 
                onChange={handleEmailChange}
                placeholder="example@example.com" /></p>
            <p>
                <input type="checkbox" onChange={handleCheckboxChecked} checked={allowed} />
                Aceito receber mensagens
            </p>
            <button type="submit">Submit</button>
        </form>
    )
}
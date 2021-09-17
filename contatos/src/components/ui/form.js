import styled from 'styled-components'

export const InputText = styled.input`
    padding: 10px;
    border-radius: 5px;
    border: 1px #cecece solid;
    &:focus {
        border: 2px #2f80ed solid;
        outline:none;
}`

export const Label = styled.label`
    font-family: sans-serif;
    margin-right: 20px;
    color: #2f80ed;
`
export const Button = styled.button`
    background: #2f80ed;
    border: none;
    color white;
    padding: 1em;
    border-radius: 2px;
`

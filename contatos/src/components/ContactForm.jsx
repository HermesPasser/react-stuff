import React from "react";
import {Label, InputText} from '../components/ui/form'
import styled from "styled-components";
import Select from "react-select";
import '../App.css'

const contactTypeOptions = [
    {value: 'phone', label: 'Telephone'},
    {value: 'email', label: 'E-mail'}
]

const ContatctFormWrapper = styled.div`
    margin-top: 10px;
`

export default function ContactForm({type, value, onChangeType, onChangeValue}) {
    const typeObj = contactTypeOptions.find(t => t = type)
    const handleOnChangeType = (e) => onChangeType(e.value)
    
    return (
        <ContatctFormWrapper className="contact-form">
            <Label>Type: </Label>
            <div class="option-select">
                <Select 
                    options={contactTypeOptions} 
                    value={typeObj} 
                    onChange={handleOnChangeType}
                    placeholder="" />
            </div>
            <Label>value: </Label>
            <InputText value={value} onChange={e => onChangeValue(e.target.value)}></InputText>
        </ContatctFormWrapper>
    )
}
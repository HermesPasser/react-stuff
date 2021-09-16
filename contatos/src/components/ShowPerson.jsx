import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {Paragraph, Strong, SubTitle} from '../components/ui/typos'

const ContactWrapper = styled.div`
    border-bottom: 1px #cecece solid;
`

export default function ShowPerson({name, id, contacts}, expanded) {
    console.log('showperson', name, id , contacts, expanded)
    const ShowDetailsElement = (
        <Paragraph>            
            <Link to={`person/${id}/details`}>Show details</Link>
        </Paragraph>
    )
    const ContactsElement = (
        <Fragment>
            <Strong>Contacts</Strong>
            {contacts.map(contact => (
                <div>
                    <Paragraph><Strong>{contact.type}:</Strong> {contact.value}</Paragraph>
                </div>
            ))}
        </Fragment>
    )

    return (
        <ContactWrapper className="person">
            <SubTitle>{name}</SubTitle>
            <Paragraph><Strong>ID:</Strong> {id}</Paragraph>
                {expanded ? ShowDetailsElement : ContactsElement}
        </ContactWrapper>
    )
}

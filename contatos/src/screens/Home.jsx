import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import ShowPerson from '../components/ShowPerson'
import {Title} from '../components/ui/typos'

export default function Home(props) {
    const people = useSelector(state => state)
    return (
        <Fragment>
            <Title>All our people</Title>
            {people.map(person => (
                <ShowPerson {...person} expanded={false} />
            ))}
        </Fragment>
    )
}
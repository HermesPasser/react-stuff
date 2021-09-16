import { React, Fragment} from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import ShowPerson from '../components/ShowPerson'
import {Title} from '../components/ui/typos'

export default function PersonDetails() {
    const {id: idStr} = useParams()
    const id = parseInt(idStr)

    // const person = useSelector(state => state.filter(p => p.id === id))
    const personaa = useSelector(state => state)[0]
    console.log('detalhes..', personaa)
    return (
        <Fragment>
            <Title>Details</Title>
            <ShowPerson {...personaa} expanded={true} />
        </Fragment>
    )
}
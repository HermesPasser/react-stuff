import { React, Fragment} from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import ShowPerson from './ShowPerson'
import {Title} from '../components/ui/typos'

export default function PersonDetails() {
    const {id: idStr} = useParams()
    const id = parseInt(idStr)
    const person = useSelector(state => state.filter(p => p.id === id))[0] 
    
    if (isNaN(id)) {
        return (<p>Bad formatted id '{idStr}'.</p>)
    }

    if (person === void(0)) {
        return (<p>No person found with the given id '{id}'.</p>)
    }

    return (
        <Fragment>
            <Title>Details</Title>
            <ShowPerson {...person} expanded={true} />
        </Fragment>
    )
}
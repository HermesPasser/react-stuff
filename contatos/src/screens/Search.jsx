import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { InputText } from '../components/ui/form'
import { Title } from '../components/ui/typos'
import ShowPerson from './ShowPerson'

export default function Search() {
    const people = useSelector(state => state)
    const [search, setSearch] = useState('')
    const [filteredPeople, setFilteredPeople] = useState([])
    useEffect( () => {
        const rs = people.filter(person => person.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        setFilteredPeople(rs)
    }, [search])

    return (
        <Fragment>
            <Title>Search</Title>
            <InputText value={search} onChange={e => setSearch(e.target.value)}></InputText>
            {
                filteredPeople.map(person => (
                    <ShowPerson {...person} />
                ))
            }
        </Fragment>
    )
}
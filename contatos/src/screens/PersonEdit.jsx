import { React, Fragment, useState} from 'react'
import { useParams, useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { Title } from '../components/ui/typos'
import { Button, Label, InputText } from '../components/ui/form'
import ContactForm from '../components/ContactForm'
import { updatePerson } from '../store/actions'

export default function PersonEdit() {
    let { id: idStr } = useParams()
    const id = parseInt(idStr)
    const history = useHistory()
    const dispatch = useDispatch()
    const person = useSelector(state => state.filter(p => p.id === id))[0] 
    const [newPerson, setPerson ] = useState(person)
    const contacts = newPerson.contacts

    if (isNaN(id)) {
        return (<p>Bad formatted id '{idStr}'.</p>)
    }

    if (person === void(0)) {
        return (<p>No person found with the given id '{id}'.</p>)
    }

    function nameChanged(e) {
        setPerson({...newPerson, name: e.target.value})
    }

    function typeChanged(type_, index) {
        let temp = [...newPerson.contacts]
        temp[index] = {...temp[index], type: type_}
        setPerson({...newPerson, contacts: temp})
    }

    function valueChanged(value_, index) {
        let temp = [...newPerson.contacts]
        temp[index] = {...temp[index], value: value_}
        setPerson({...newPerson, contacts: temp})
    }

    function save(e){
        e.preventDefault()
        dispatch(updatePerson(newPerson))
        history.push(`../${id}/details`)
    }

    return (
        <Fragment>
            <Title>Edit</Title>
            <Label >Name: </Label>
            <InputText onChange={nameChanged} value={newPerson.name} />
            {
               contacts.map((contact, index) => (
                    <ContactForm {...contact}
                        onChangeType={(type) => typeChanged(type, index)} 
                        onChangeValue={(value) => valueChanged(value, index)}
                        />
               ))
            }
            <Button onClick={save}>Save</Button>
        </Fragment>
    )
}
          
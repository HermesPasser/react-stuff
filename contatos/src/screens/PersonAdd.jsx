import {React, Fragment, useState} from 'react'
import {Title} from '../components/ui/typos'
import {useDispatch} from 'react-redux'
import {Button, Label, InputText} from '../components/ui/form'
import {newPerson} from '../store/actions'
import {useHistory} from 'react-router'
import ContactForm from '../components/ContactForm'
import '../App.css'

const initialStateContact = {
    type: '', value: ''
}

const initialState = {
    name: '',
    contacts: [ initialStateContact ]
}

export default function PersonAdd(props) {
    const [person, setPerson ] = useState(initialState)
    const history = useHistory()
    const dispatch = useDispatch()

    function nameChanged(e) {
        setPerson({...person, name: e.target.value})
    }

    function typeChanged(type_, index) {
        let temp = [...person.contacts]
        temp[index] = {...temp[index], type: type_}
        setPerson({...person, contacts: temp})
    }

    function valueChanged(value_, index) {
        let temp = [...person.contacts]
        temp[index] = {...temp[index], value: value_}
        setPerson({...person, contacts: temp})
    }

    function addContact(e) {
        e.preventDefault()
        setPerson({...person, contacts: [...person.contacts, initialStateContact]})
    }
    
    function save(e){
        e.preventDefault()
        let p =newPerson(person)
        console.log(p)
        dispatch(p)
        history.push("/")
    }

    return (
        <Fragment>
            <Title>Add person</Title>
            <form>
                <Label onChange={nameChanged}>Name: </Label>
                <InputText></InputText>
                {
                    person.contacts.map((contact, index) => (
                        <ContactForm {...contact} 
                            onChangeType={(type) => typeChanged(type, index)} 
                            onChangeValue={(value) => valueChanged(value, index)}
                            />
                    ))
                }
                <Button onClick={addContact}>Add contact</Button>
                <Button onClick={save}>Save</Button>
            </form>
        </Fragment>
    )
}
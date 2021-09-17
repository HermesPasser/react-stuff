import { getLastUsedPersonId } from './reducer'

export const NEW_PERSON = 'NP'
export const UPDATE_PERSON = 'UP'

export function newPerson(person){
    return {type: NEW_PERSON, person: {...person, id: getLastUsedPersonId()}}
}

export function updatePerson(person){
    // since we're pulling this person FROM the store, it already got a id
    return {type: UPDATE_PERSON, person: {...person }}
}

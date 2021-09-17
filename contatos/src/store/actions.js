import { getLastUsedPersonId } from './reducer'

export const NEW_PERSON = 'NP'

export function newPerson(person){
    return {type: NEW_PERSON, person: {...person, id: getLastUsedPersonId()}}
}

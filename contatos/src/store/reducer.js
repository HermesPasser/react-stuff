import * as actions from './actions'

let lastUsedPersonId = 2;
const initialState = [
    {
        id: 1,
        name: 'Pedro',
        contacts: [
            { type: 'phone', value: '11955555555'},
            { type: 'email', value: 'pedro@mail.com'}
        ]
    },
    {
        id: 2,
        name: 'Agronopolius',
        contacts: [
            { type: 'phone', value: '119555555544'},
            { type: 'email', value: 'agro@mail.com'}
        ]
    }
]

export const getLastUsedPersonId = () => ++lastUsedPersonId//++PersonId.lastUsedId

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.NEW_PERSON:
            return [...state, action.person]
        case actions.UPDATE_PERSON:
            const id = action.person.id
            const index = state.findIndex(p => p.id === id)
            if (index === -1)
                return state

            state[index] = action.person
            return state
        default:
            return state;
    }
}

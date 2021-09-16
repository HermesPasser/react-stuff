import { INCREMENT, DECREMENT } from "./action"
const initialState = {
    count : 0,
    message: ''
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case INCREMENT:
            return { count: state.count + action.step, message: action.message }
        case DECREMENT:
            return { count: state.count - action.step, message: action.message }
        default:
            return state
    }
}

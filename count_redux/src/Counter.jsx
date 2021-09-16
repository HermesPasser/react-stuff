import React from 'react'
import { increment, decrement } from './store/action'
import { useSelector, useDispatch } from 'react-redux'

export default function Counter(propts) {
    const count = useSelector(state => state.count)
    const msg = useSelector(state => state.message)
    const dispatch = useDispatch()
    
    const handle_increment = (step = 1) => {
        const text = (count + step > 10) ? 'Over 10' : ''
        dispatch(increment(step, text))
    }
    
    const do_increment = () => handle_increment(1)
    const do_increment2 = () => handle_increment(2)
    
    const handle_decrement = (step = 1) => {
        const text = (count + step > 10) ? 'under 0' : ''
        dispatch(decrement(step, text))
    }
    
    const do_decrement = () => handle_decrement(1)
    const do_decrement2 = () => handle_decrement(2)
    
    return (
            <div>
                <h1>{count}</h1>
                <button onClick={do_increment2}>+2</button>
                <button onClick={do_increment}>+</button>
                <button onClick={do_decrement}>-</button>
                <button onClick={do_decrement2}>-2</button>
                <p>{msg}</p>
            </div>
        )
}

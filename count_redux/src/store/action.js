export const INCREMENT = 'INC'
export const DECREMENT = 'DEC'

export function increment(step = 1, msg = '') {
    return { type: INCREMENT, step, message: msg}
}

export function decrement(step = 1, msg = '') {
    return { type: DECREMENT, step, message: msg }
}
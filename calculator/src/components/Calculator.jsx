import React, {useState} from 'react'
import Button from './Button'
import Display from './Display'

export default function Calculator(props) {
    const [displayValue, setDisplayValue] = useState('')
    function clearInput() { setDisplayValue('') }
    function handleClick(digit) {
        setDisplayValue(displayValue + digit)
    }
    function handleEqual() {
        try{
            let val = eval(displayValue)
            
            if(val === Infinity)
                val = 'NaN'

            setDisplayValue(val)
        } catch {
            setDisplayValue('invalid')
        }
    }
    return (
        <div className="calculator">
            <Display value={displayValue} />
            <Button label="AC" onClick={clearInput} size={3} />
            <Button label="/" onClick={handleClick} op />

            <Button label="7" onClick={handleClick} />
            <Button label="8" onClick={handleClick} />
            <Button label="9" onClick={handleClick} />
            <Button label="*" onClick={handleClick} op />

            <Button label="4" onClick={handleClick} />
            <Button label="5" onClick={handleClick} />
            <Button label="6" onClick={handleClick} />
            <Button label="-" onClick={handleClick} op />

            <Button label="1" onClick={handleClick} />
            <Button label="2" onClick={handleClick} />
            <Button label="3" onClick={handleClick} />
            <Button label="+" onClick={handleClick} op />
            
            <Button label="0" onClick={handleClick} size={2} />
            <Button label="." onClick={handleClick} />
            <Button label="=" onClick={handleEqual} op />
        </div>
    )
}
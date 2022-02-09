import { useState } from "react"

export const RadioInput = ({data, changeHandler}) => {
    const [inputState, setInputState] = useState(data.checked)

    const inputHandler = (e) => {
        setInputState(e.target.value)
        data.value = e.target.checked
    }
    
    const blurHandler = () => {
        changeHandler(data)
    }
    
    return <input name={data.name} 
        type='radio' 
        checked={inputState} 
        key={data.key} 
        onBlur={e => blurHandler()}
        onChange={e => {inputHandler(e)}}/>
}
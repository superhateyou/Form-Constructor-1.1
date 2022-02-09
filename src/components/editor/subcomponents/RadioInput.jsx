import { useState } from "react"

export const RadioInput = ({data, changeHandler}) => {
    const formState = {...data}
    const [inputState, setInputState] = useState(data.checked)

    const inputHandler = (e) => {
        setInputState(e.target.value)
        formState.value = e.target.checked
    }
    
    const blurHandler = () => {
        changeHandler(formState)
    }
    
    return <input name={data.name} 
        type='radio' 
        checked={inputState} 
        key={data.key} 
        onBlur={e => blurHandler()}
        onChange={e => {inputHandler(e)}}/>
}
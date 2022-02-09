import { useState } from "react"

export const InputMultiPart = ({newValue, newName, newKey, newPlaceholder, changeHandler, blurHandler}) => {
    const [inputState, setInputState] = useState(newValue)
    const inputHandler = (e) => {
        setInputState(e.target.value)
        changeHandler(e.target.value, e)
    }

    return <input 
        name={newName} 
        value={inputState} 
        placeholder = {newPlaceholder} 
        type='text' 
        key={newKey} 
        onBlur={e => {blurHandler(e)}}
        onInput={e => {inputHandler(e)}}/>
}
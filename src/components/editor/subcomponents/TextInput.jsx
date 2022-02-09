import { useState } from "react"

export const TextInput = ({data, changeHandler}) => {
    const formState = {...data}
    const [inputState, setInputState] = useState(data.value)

    const inputHandler = (e) => {
        setInputState(e.target.value)
        formState.value = e.target.value
    }
    
    const blurHandler = () => {
        changeHandler(formState)
    }

    return <input name={data.name} 
        value={inputState} 
        placeholder={data.placeholder} 
        type='text' 
        key={data.key} 
        onBlur={e => blurHandler()}
        onInput={e => {inputHandler(e)}}/>
}
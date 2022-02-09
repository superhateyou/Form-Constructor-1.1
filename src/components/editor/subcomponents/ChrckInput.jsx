import { useState } from "react"

export const CheckInput = ({data, changeHandler}) => {
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
    type='checkbox' 
    key={data.key} 
    checked={inputState}
    onBlur={e => blurHandler()}
    onChange={e => {inputHandler(e)}}/>
}
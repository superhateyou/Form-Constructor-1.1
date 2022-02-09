import { useState } from "react"

export const CheckInput = ({data, changeHandler}) => {
    const [inputState, setInputState] = useState(data.checked)

    const inputHandler = (e) => {
        setInputState(e.target.value)
        data.value = e.target.checked
    }
    
    const blurHandler = () => {
        changeHandler(data)
    }

    return <input name={data.name} 
    type='checkbox' 
    key={data.key} 
    checked={inputState}
    onBlur={e => blurHandler()}
    onChange={e => {inputHandler(e)}}/>
}
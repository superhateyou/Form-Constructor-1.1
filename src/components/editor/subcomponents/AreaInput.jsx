import { useState } from "react"

export const AreaInput = ({data, changeHandler}) => {
    const [inputState, setInputState] = useState(data.value)

    const inputHandler = (e) => {
        setInputState(e.target.value)
        data.value = e.target.value
    }
    
    const blurHandler = () => {
        changeHandler(data)
    }

    return <textarea name={data.name} 
        value={inputState} 
        placeholder={data.placeholder} 
        rows='10' 
        columns='1000' type='text' 
        key={data.key} 
        onBlur={e => blurHandler()}
        onInput={e => {inputHandler(e)}}> </textarea>
}
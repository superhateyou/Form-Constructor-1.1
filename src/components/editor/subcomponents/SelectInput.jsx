import { useState } from "react"

export const SelectInput = ({data, changeHandler}) => {
    const formState = {...data}
    const [inputState, setInputState] = useState(data.value)

    const inputHandler = (e) => {
        setInputState(e.target.value)
        formState.value = e.target.value
    }
    
    const blurHandler = () => {
        changeHandler(formState)
    }

    return <select name={data.name} 
        key={data.key} 
        defaultValue={data.options[data.options.indexOf(inputState)]}
        onBlur={e => blurHandler()}
        onChange={e => {inputHandler(e)}}>
            {data.options.map(e=> 
            <option label={e} 
            key={data.key + e}>{e}
            </option>)}
            </select>
}
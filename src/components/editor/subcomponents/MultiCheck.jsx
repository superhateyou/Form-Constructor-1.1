import { useState } from "react"

export const MultiCheck = ({data, changeHandler}) => {
    let tempArr = []
    const [localState, setLocalState] = useState(data.checked)

    const localHandler = (e) => {
        setLocalState({...localState, [e.target.name.slice(-1)] : e.target.checked})
        data.checked[e.target.name.slice(-1)] = e.target.checked
    }

    const blurHandler = () => {
        changeHandler(data)
    }

    const renderField = () => {
        if (data.quantity > 0){
            for (let i = 0; i < data.quantity; i++){
                let currentName = data.name + '_' + i
                let currentKey = data.name + '_' + i + '_' + data.type
                tempArr.push(<input 
                        alt={data.name} 
                        name={currentName} 
                        type='checkbox' 
                        key={currentKey}
                        checked={localState[i]}
                        onBlur={e => blurHandler()}
                        onChange={e => {localHandler(e)}}
                    />)
            }
        }
        return tempArr
    }
    return (<div>{renderField()}</div>)
}
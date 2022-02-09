import { useState } from "react"
import { InputMultiPart } from "./MultiInputPart"

export const MultiInput = ({data, changeHandler}) => {
    const tempArr = []
    let formLength = 0;
    
    if (data.quantity >= data.value.length){
        formLength = data.quantity
    } else (formLength = data.value.length)

    const [lengthArr, setLengthArr] = useState(formLength)
    const [inputState, setInputState] = useState(data.value.reduce((acc, inputObj, index) => {
        acc[data.name + '_' + index] = data.value[index]
        return acc
    }, {}))

    const addField = () => {
        setLengthArr(lengthArr + 1)
    }
    
    const inputHandler = (miniInputState, e) => {
        setInputState({...inputState, [e.target.name] : miniInputState})  
        data.value[e.target.name.slice(-1)] = miniInputState
    }

    const blurHandler = () => {
        changeHandler(data)
    }

    const renderField = () => {
        if (data.quantity > 0){
            for (let i = 0; i < lengthArr; i++){
                let currentName = data.name + '_' + i
                let currentValue = inputState[currentName]
                let currentKey = data.name + '_' + i + '_' + data.type
                tempArr.push(
                    <InputMultiPart 
                        newValue={currentValue}
                        newName={currentName} 
                        key={currentKey+currentName}
                        newKey={currentKey} 
                        newPlaceholder={data.placeholder}
                        blurHandler={blurHandler}
                        changeHandler={inputHandler}/>
                    )
            }
        }
        return tempArr
    }

    return (
        <div>
            {renderField()}
            <button key={data.name + '+' + data.type + '_addButton'} 
                type='button' 
                onClick={addField}>
                Добавить поле ввода
            </button>
        </div>
    )
}
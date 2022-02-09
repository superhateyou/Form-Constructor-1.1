import { useState } from 'react'
import styles from './../formEditor.module.css'

export const KeyValue = ({data, changeHandler}) => {
    const tempArr = data.options.slice()
    const formState = {...data}

    const [keysState, setKeysState] = useState(data.keys.reduce((acc, inputObj, index) => {
        acc[data.name + '_key_' + index] = data.keys[index]
        return acc
    }, {}))
    const [valuesState, setValuesState] = useState(data.values.reduce((acc, inputObj, index) => {
        acc[data.name + '_value_' + index] = data.values[index]
        return acc
    }, {}))

    const inputHandler = (e) => {
        if (e.target.name.includes('key')){
            setKeysState({...keysState, [e.target.name] : data.options.indexOf(e.target.value)})
            formState.keys[e.target.name.slice(-1)] = data.options.indexOf(e.target.value)
        }
        if (e.target.name.includes('value')){
            setValuesState({...valuesState, [e.target.name] : e.target.value})
            formState.values[e.target.name.slice(-1)] = e.target.value 
        }
    }
    
    const blurHandler = () => {
        changeHandler(formState)
    }

    return (
        tempArr.map((el, index) => (
            <div key={data.name+data.type+index}
            onBlur={e => blurHandler()}>
            {<select name={data.name+'_key_'+index} 
                    className={styles.keyValue} 
                    defaultValue={data.options[keysState[data.name+'_key_'+index]]}
                    onChange={e => {inputHandler(e)}}
                    onBlur={e => blurHandler()}> 
                        {data.options.map(x => 
                            <option key={data.name+x} 
                                value={x}>{x}
                            </option>)}
                    </select>}
            {<input name={data.name+'_value_'+index} 
                    index={index}
                    onChange={e => {inputHandler(e)}} 
                    onBlur={e => blurHandler()}
                    type="text" 
                    value={valuesState[data.name+'_value_'+index]}
                    placeholder={data.placeholder} 
                    className={styles.keyValueText} />}
        </div>
        ))
    )
    
}
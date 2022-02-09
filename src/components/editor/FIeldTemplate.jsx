import { InputMap } from "./InputMap"

export const FieldTemplate = ({data, changeHandler}) => {
    if (InputMap.has(data.type)){
        const ComponentName = InputMap.get(data.type)
        return(<ComponentName data={data} changeHandler={changeHandler} />)
    }
    return null
}
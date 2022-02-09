import { CheckInput } from './subcomponents/ChrckInput'
import { MultiCheck } from './subcomponents/MultiCheck'
import { TextInput } from './subcomponents/TextInput'         
import { MultiInput } from './subcomponents/MultiInput'
import { NumberInput } from './subcomponents/NumberInput'        
import { PasswordInput } from './subcomponents/PasswordInput'    
import { AreaInput } from './subcomponents/AreaInput'      
import { RadioInput } from './subcomponents/RadioInput'
import { SelectInput } from './subcomponents/SelectInput'
import { MultiSelect } from './subcomponents/MultiSelect'
import { KeyValue } from './subcomponents/KeyValue'


export const InputMap = new Map([
    ["textInput", TextInput],
    ["numberInput", NumberInput],
    ["passwordInput", PasswordInput],
    ["areaInput", AreaInput],
    ["checkInput", CheckInput],
    ["multiInput", MultiInput],
    ["multiCheck", MultiCheck],
    ["radioInput", RadioInput],
    ["selectInput", SelectInput],
    ["multiSelect", MultiSelect],
    ["keyValue", KeyValue]
])
import { useState } from "react"
import styles from "./formEditor.module.css"
import { FieldTemplate } from "./FIeldTemplate"

export const FormEditor = ({arr}) => {
    const [statement, setStatement] = useState(arr.reduce((acc, inputObj) => {
        acc[inputObj.index] = inputObj
        return acc
    }, {}))

    const changeHandler = (inputState) => {  //main handler
        setStatement({...statement, [inputState.index] : inputState})
    }


    const logInfo = () => { 
        console.log(Object.values(statement))
    }
    
    // const logInfo = () => { 
    //     return 0
    // }

    return (    
        <div className={styles.editorBox}>  
         <button onClick={logInfo}>Вывести</button>
         <form>
         {arr.map((el, i) => 
           <FieldTemplate 
                key={i.toString()} 
                data={el} 
                changeHandler={changeHandler} 
           />)}
         </form>
        </div>
    )
}

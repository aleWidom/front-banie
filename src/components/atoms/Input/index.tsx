"use client"
import { useState } from "react"
import { InputView } from "./InputView"


export const Input = () => {

    const [valueInput, setValueInPut] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueInPut(e.target.value)
    }
    
    return (
        <InputView textPlaceHolder="Introduzca el texto aquí bañero" valueInput={valueInput} handleChange={handleChange}/>
    )
}


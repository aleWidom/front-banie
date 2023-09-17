"use client"
import { useContext, useState } from "react"
import { InputView } from "./InputView"
import { InputContext } from "@/context/input"


export const Input = () => {

    const [valueInput, setValueInPut] = useState("")

    const {input}= useContext(InputContext)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueInPut(e.target.value)
    }
    
    return (
        <>
        {input.type === "Base" ? <InputView textPlaceHolder="Introduzca el texto aquí bañero" valueInput={valueInput} handleChange={handleChange}/> : ""}
        </>
    )
}


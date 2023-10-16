"use client"
import { useContext, useState } from "react"
import { InputView } from "./InputView"
import { InputContext } from "@/context/input"
import { FaLock, FaCheck } from "react-icons/fa6";




export const Input = () => {

    const {inputState}= useContext(InputContext)

    const [valueInputEmail, setValueInPutEmail] = useState("")

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueInPutEmail(e.target.value)
    }

    return (
              <InputView type={inputState.type} textPlaceHolder={inputState.placeholder} valueInputEmail={inputState.value} handleChangeEmail={handleChangeEmail} styleInput={inputState.styleInput} error={inputState.placeholder === "Error" && "Debe colocar los datos correctamente."}>
                {inputState.placeholder === "Left Component" && <FaCheck/>}
                {inputState.placeholder === "Secured" &&  <FaLock/>}
              </InputView>
    )
}


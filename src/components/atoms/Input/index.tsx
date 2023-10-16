"use client"
import { useContext, useState } from "react"
import { InputView } from "./InputView"
import { InputContext } from "@/context/input"
import { FaLock, FaCheck } from "react-icons/fa6";


const styleInputBase = {
	border: "black 1px solid",
}

const styleInputError = {
	border: "red 1px solid",
    color: "red"
}

const styleInputSuccess = {
	border: "green 1px solid",
}

const styleInputWithLeft = {
	border: "black 1px solid",
}

const styleInputDisabled= {
	border: "black 1px solid",
     opacity: 0.5
}

const styleInputSecurity= {
	border: "black 1px solid",
}

export const Input = () => {

    const {inputState}= useContext(InputContext)

    const [valueInputEmail, setValueInPutEmail] = useState("")

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueInPutEmail(e.target.value)
    }
    
    return (
        <>
        {inputState.email === "Base" && <InputView type={'text'} textPlaceHolder="Input Base" valueInputEmail={valueInputEmail} handleChangeEmail={handleChangeEmail} styleInput={styleInputBase}/>}
        {inputState.email  === "Error" && <InputView type={'text'} textPlaceHolder="Input Error" valueInputEmail={valueInputEmail} handleChangeEmail={handleChangeEmail} styleInput={styleInputError} error={'Debe colocar los datos correctamente.'}/>}
        {inputState.email  === "Success" && <InputView type={'text'} textPlaceHolder="Success" valueInputEmail={valueInputEmail} handleChangeEmail={handleChangeEmail} styleInput={styleInputSuccess}/>}
        {inputState.email  === "Left Component" && 
        <InputView type={'text'}textPlaceHolder="Left Component" valueInputEmail={valueInputEmail} handleChangeEmail={handleChangeEmail} styleInput={styleInputWithLeft}>
            <FaCheck/>
        </InputView>}
        {inputState.email  === "Disabled" && <InputView type={'text'}textPlaceHolder="Disabled" valueInputEmail={valueInputEmail} handleChangeEmail={handleChangeEmail} styleInput={styleInputDisabled}/>}
        {inputState.email  === "Secured" && 
        <InputView type={'password'} textPlaceHolder="Secured" valueInputEmail={valueInputEmail} handleChangeEmail={handleChangeEmail} styleInput={styleInputSecurity}>
            <FaLock/>
        </InputView>}
      
        </>
    )
}


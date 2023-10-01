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

    const [valueInput, setValueInPut] = useState("")

    const {input}= useContext(InputContext)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueInPut(e.target.value)
    }
    
    return (
        <>
        {input.type === "Base" && <InputView type={'text'} textPlaceHolder="Input Base" valueInput={valueInput} handleChange={handleChange} styleInput={styleInputBase}/>}
        {input.type === "Error" && <InputView type={'text'} textPlaceHolder="Input Error" valueInput={valueInput} handleChange={handleChange} styleInput={styleInputError} error={'Debe colocar los datos correctamente.'}/>}
        {input.type === "Success" && <InputView type={'text'} textPlaceHolder="Success" valueInput={valueInput} handleChange={handleChange} styleInput={styleInputSuccess}/>}
        {input.type === "Left Component" && 
        <InputView type={'text'}textPlaceHolder="Left Component" valueInput={valueInput} handleChange={handleChange} styleInput={styleInputWithLeft}>
            <FaCheck/>
        </InputView>}
        {input.type === "Disabled" && <InputView type={'text'}textPlaceHolder="Disabled" valueInput={valueInput} handleChange={handleChange} styleInput={styleInputDisabled}/>}
        {input.type === "Secured" && 
        <InputView type={'password'} textPlaceHolder="Secured" valueInput={valueInput} handleChange={handleChange} styleInput={styleInputSecurity}>
            <FaLock/>
        </InputView>}
        </>
    )
}


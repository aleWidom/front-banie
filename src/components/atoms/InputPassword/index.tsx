"use client"
import { useContext, useState } from "react"
import { InputPasswordView } from "./InputPasswordView"
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

export const InputPassword = () => {

    const {inputState}= useContext(InputContext)

    const [valuePassword, setValueInPutPassword] = useState("")


    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueInPutPassword(e.target.value)
    }

 
    
    return (
        <>
        {inputState.password === "Base" && <InputPasswordView type={'text'} textPlaceHolder="Input Base" valueInputPassword={valuePassword} handleChangePassword={handleChangePassword} styleInput={styleInputBase}/>}
        {inputState.password   === "Error" && <InputPasswordView type={'text'} textPlaceHolder="Input Error" valueInputPassword={valuePassword} handleChangePassword={handleChangePassword}  styleInput={styleInputError} error={'Debe colocar los datos correctamente.'}/>}
        {inputState.password   === "Success" && <InputPasswordView type={'text'} textPlaceHolder="Success" valueInputPassword={valuePassword} handleChangePassword={handleChangePassword}  styleInput={styleInputSuccess}/>}
        {inputState.password   === "Left Component" && 
        <InputPasswordView type={'text'}textPlaceHolder="Left Component" valueInputPassword={valuePassword} handleChangePassword={handleChangePassword}  styleInput={styleInputWithLeft}>
            <FaCheck/>
        </InputPasswordView>}
        {inputState.password   === "Disabled" && <InputPasswordView type={'text'}textPlaceHolder="Disabled" valueInputPassword={valuePassword} handleChangePassword={handleChangePassword}  styleInput={styleInputDisabled}/>}
        {inputState.password   === "Secured" && 
        <InputPasswordView type={'password'} textPlaceHolder="Secured" valueInputPassword={valuePassword} handleChangePassword={handleChangePassword}  styleInput={styleInputSecurity}>
            <FaLock/>
        </InputPasswordView>}
      
        </>
    )
}


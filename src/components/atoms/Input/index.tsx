"use client"
import { useContext } from "react"
import { useForm } from "react-hook-form";
import { InputView } from "./InputView"
import { InputContext } from "@/context/input"
import { FaLock, FaCheck } from "react-icons/fa6";


interface InputProps {
  htmlFor : string;
  register: any
}

export const Input = ({htmlFor, register}:InputProps) => {

    const {inputState}= useContext(InputContext)

    // const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setValueInPutEmail(e.target.value)
    // }

    return (
              <InputView type={"text"} register={register} htmlFor={htmlFor} textPlaceHolder={inputState.placeholder} styleInput={inputState.styleInput} error={inputState.placeholder === "Error" && "Debe colocar los datos correctamente."}>
                {inputState.placeholder === "Left Component" && <FaCheck/>}
                {inputState.placeholder === "Secured" &&  <FaLock/>}
              </InputView>
    )
}


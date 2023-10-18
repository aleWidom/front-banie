"use client"
import { useContext } from "react"
import { useForm } from "react-hook-form";
import { InputView } from "./InputView"
import { InputContext } from "@/context/input"
import { FaLock, FaCheck } from "react-icons/fa6";


interface InputProps {
  htmlFor : string;
  register: any;
  validation: any;
  errors: any
}

export const Input = ({htmlFor, register, validation, errors}:InputProps) => {

    const {inputState}= useContext(InputContext)

    return (
              <InputView type={"text"} errors={errors} validation={validation} register={register} htmlFor={htmlFor} textPlaceHolder={inputState.placeholder} styleInput={inputState.styleInput}>
                {inputState.placeholder === "Left Component" && <FaCheck/>}
                {inputState.placeholder === "Secured" &&  <FaLock/>}
              </InputView>
    )
}


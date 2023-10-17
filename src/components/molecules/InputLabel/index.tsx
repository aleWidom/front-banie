"use client"
import { InputLabelView } from "./InputLabelView"


interface InputGroupProps {
    titleLabel: string;
    htmlFor: string;
    register: any
}


export const InputLabel = ({titleLabel, htmlFor, register}: InputGroupProps) => {
    return (
        <InputLabelView titleLabel={titleLabel} htmlFor={htmlFor} register={register}/>
    )
}


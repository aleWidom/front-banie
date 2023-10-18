"use client"
import { InputLabelView } from "./InputLabelView"


interface InputGroupProps {
    titleLabel: string;
    htmlFor: string;
    register: any;
    validation?: any;
    errors: any
}


export const InputLabel = ({titleLabel, htmlFor, register, validation, errors}: InputGroupProps) => {
    return (
        <InputLabelView titleLabel={titleLabel} htmlFor={htmlFor} register={register} validation={validation} errors={errors}/>
    )
}


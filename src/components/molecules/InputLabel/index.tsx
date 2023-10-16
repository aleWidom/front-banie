"use client"
import { InputLabelView } from "./InputLabelView"


interface InputGroupProps {
    titleLabel: string
}


export const InputLabel = ({titleLabel}: InputGroupProps) => {

    return (
        <InputLabelView titleLabel={titleLabel}/>
    )
}


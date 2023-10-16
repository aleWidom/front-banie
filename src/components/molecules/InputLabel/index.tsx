"use client"
import { useContext } from "react"
import { InputContext } from "@/context/input"
import { InputLabelView } from "./InputLabelView"


interface InputGroupProps {
    titleLabel: string
}


export const InputLabel = ({titleLabel}: InputGroupProps) => {
    return (
        <InputLabelView titleLabel={titleLabel}/>
    )
}


import { Input } from "@/components/atoms"

interface InputGroupProps {
    title: string,
    error: string
}


export const InputGroupView = ({title, error}:InputGroupProps) => {
    return (
       <>
        <label>{title}</label>
        <Input/>
        <span>{error}</span>
        </>
    )
}


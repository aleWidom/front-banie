
interface ButtonProps {
    type: "submit" | "reset",
    textButton: string
}

export const ButtonView = ({type, textButton}: ButtonProps) => {
    return (
        <button type={type}>{textButton}</button>
    )
}


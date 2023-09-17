
interface InputProps {
    textPlaceHolder: string,
    valueInput: string,
    handleChange: any
}

export const InputView = ({textPlaceHolder, valueInput, handleChange}: InputProps) => {
    return (
        <input placeholder={textPlaceHolder} value={valueInput} onChange={handleChange}/>
    )
}


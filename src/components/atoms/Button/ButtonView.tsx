import styles from './ButtonView.module.scss'

interface ButtonProps {
    type: "submit" | "reset",
    textButton: string
}

export const ButtonView = ({type, textButton}: ButtonProps) => {
    return (
        <button type={type} className={styles.button}>{textButton}</button>
    )
}


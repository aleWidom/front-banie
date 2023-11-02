import { ButtonHTMLAttributes } from "react";

import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    size?: "small" | "medium" | "large"
}

export const Button = ({ text, size = "medium" , ...props }: ButtonProps) => {
    return (
        <button {...props} className={`${styles.button} ${styles[size]}`}>
            {text}
        </button>
    );
};

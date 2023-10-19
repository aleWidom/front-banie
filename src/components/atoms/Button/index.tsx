import { ButtonHTMLAttributes } from "react";

import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

export const Button = ({ type, text, ...props }: ButtonProps) => {
    return (
        <button {...props} type={type} className={styles.button}>
            {text}
        </button>
    );
};

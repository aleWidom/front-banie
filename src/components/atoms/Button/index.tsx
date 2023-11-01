import { ButtonHTMLAttributes } from "react";

import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

export const Button = ({ text, ...props }: ButtonProps) => {
    
    return (
        <button {...props} className={styles.button}>
            {text}
        </button>
    );
};

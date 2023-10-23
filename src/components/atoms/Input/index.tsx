import { forwardRef } from "react";
import { FaEye } from "react-icons/fa6";

import { InputProps } from "./Input.types";
import styles from "./Input.module.scss";

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        { type = "text", placeholder, errorsMessage, ...props }: InputProps,
        ref
    ) => (
        <div className={styles.containerInput}>
            <input
                {...props}
                type={type}
                ref={ref}
                placeholder={placeholder}
                autoComplete="off"
                autoCorrect="off"
                className={styles.input}
            />
            <span className={styles.securedIcon}>
                {type === "password" && <FaEye />}
            </span>
        </div>
    )
);

Input.displayName = "Input";

// "use client"
// import { useContext } from "react"
// import { InputView } from "./InputView"
// import { InputContext } from "@/context/input"
// import { FaEye} from "react-icons/fa6";
// import { type } from "os";

// interface InputProps {
//   htmlFor : string;
//   register: any;
//   validation: any;
//   errors: any;
//   type: string
// }

// export const Input = ({htmlFor, register, validation, errors, type}:InputProps) => {

//     const {inputState}= useContext(InputContext)

//     return (
//               <InputView type={type} errors={errors} validation={validation} register={register} htmlFor={htmlFor} textPlaceHolder={inputState.placeholder} styleInput={inputState.styleInput}>
//
//               </InputView>
//     )
// }

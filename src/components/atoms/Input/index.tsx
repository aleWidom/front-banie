import { FaEye} from "react-icons/fa6";
import styles from "./Input.module.scss";
import {FC, InputHTMLAttributes, forwardRef} from "react";

interface InputProps {
  type?: string;
  errorsMessage?: string;
} 

export const Input = forwardRef<HTMLInputElement, InputProps>( ({
  type = "text",
  errorsMessage,
  ...props 
}: InputProps, ref) => {

  return (
    <div className={styles.containerInputError}>
      <div className={styles.containerInput}>
        <input 
          {...props}
          ref={ref}
          type={type}
          className={styles.input}
        />
        <span className={styles.children}>{type === "password" && <FaEye/>}</span>
      </div>
      {!!errorsMessage && <span className={styles.error}>{errorsMessage}</span>}
    </div>
  );
});



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


import { forwardRef, useContext, useState } from "react";
import { InputContext } from "@/context/input";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

import styles from "./Input.module.scss";
import { InputProps } from "./Input.types";


export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", placeholder, visiblePassword, ...props }: InputProps, ref) => {

  const {setVisiblePassword} = useContext(InputContext)

    const handlePassword = () => {
      setVisiblePassword(!visiblePassword)
    }

    return (
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
          {placeholder === "Escribe tu contraseña" && visiblePassword === false && <div onClick={handlePassword}><FaEye /></div>}
          {placeholder === "Escribe tu contraseña" && visiblePassword === true && <div onClick={handlePassword}><FaEyeSlash/></div>}
        </span>
      </div>
    );
  }
);

Input.displayName = "Input";

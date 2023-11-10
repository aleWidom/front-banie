"use client"
import {
  forwardRef,
  useState,
} from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

import styles from "./Input.module.scss";
import { InputProps } from "./Input.types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      placeholder,
      isSecure = false,
      ...props
    }: InputProps,
    ref
  ) => {


    const [visible, setVisible] = useState<boolean>(false);


    return (
      <div className={styles.containerInput}>
        <input
          {...props}
          type={visible && isSecure ? "text" : type}
          ref={ref}
          placeholder={placeholder}
          autoComplete="off"
          autoCorrect="off"
          className={styles.input}
        />
        <div className={styles.securedIcon}>
          {isSecure && (
            <span onClick={() => setVisible((prev) => !prev)}>
              {visible ? <FaEye /> : <FaEyeSlash />}
            </span>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

"use client"
import {
  forwardRef,
  useCallback,
  //  useContext,
  useState,
} from "react";
// import { InputContext } from "@/context/input";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

import styles from "./Input.module.scss";
import { InputProps } from "./Input.types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      placeholder,
      // visiblePassword,
      isSecure = false,
      ...props
    }: InputProps,
    ref
  ) => {
    // No necesitas guardar esto en un estado, que lo maneje el input. Evitamos pasamanos de props y re renderizacion de otros componentes
    // Si el usuario refreshea, se vuelve al valor inicial.
    // const { setVisiblePassword } = useContext(InputContext);

    const [visible, setVisible] = useState<boolean>(false);

    // const handlePassword = () => {
    //   setVisiblePassword(!visiblePassword);
    // };

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
          {/* {placeholder === "Escribe tu contraseña" &&
            visiblePassword === false && (
              <div onClick={handlePassword}>
                <FaEye />
              </div>
            )}
          {placeholder === "Escribe tu contraseña" &&
            visiblePassword === true && (
              <div onClick={handlePassword}>
                <FaEyeSlash />
              </div>
            )} */}

          {isSecure && (
            // Con el prev, se maneja el estado del useState adentro de la funcion, y no dependes de que se actualice el "visible" para hacerlo.
            // Es mas apropiado hacerlo asi, cuando queres invertir el valor
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

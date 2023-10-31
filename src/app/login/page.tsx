"use client";
// Librerias -> react, luego next, y luego librerias

import { useContext } from "react";
import { InputContext } from "@/context/input";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

// Componentes y resto
import { Button, Input } from "@/components/atoms";
import { InputContainer } from "@/components/molecules/InputContainer";
import { loginUser } from "../../../services/login";

// Estilos, types y constantes por un lado
import styles from "./Login.module.scss";
import { FormValuesLogin } from "./Login.types";
import { validationEmail, validationPassword } from "./Login.constants";
import Link from "next/link";

export default function Login() {
  const { visiblePassword, setVisiblePassword } = useContext(InputContext);

  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors, isDirty, isValid, isLoading },
    // Tipamos el useForm para que podamos usar bien los errores.
  } = useForm<FormValuesLogin>({
    mode: "onBlur",
  });

  const onSubmit = handleSubmit((data) => {
    console.log("acaa", data);

    loginUser(false, data)
      .then((response) => {
        if (response) {
          alert("login correcto");
        } else {
          alert("login incorrecto");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className={styles.container}>
      {/* Crear tamaños de botones -> small, medium y bug */}
      <Link href="/">
        <Button
          text="Volver"
          onClick={() => {
            setVisiblePassword(false);
          }}
        />
      </Link>

      <form onSubmit={onSubmit} className={styles.containerForm}>
        <div className={styles.containerInputs}>
          <h2>Login</h2>
          <InputContainer label="Email" errorsMessage={errors.email?.message}>
            <Input
              {...register("email", validationEmail)}
              type="email"
              placeholder="Escribe tu email"
            />
          </InputContainer>
          <InputContainer
            label="Contraseña"
            errorsMessage={errors.password?.message}
          >
            <Input
              {...register("password", validationPassword)}
              // type={visiblePassword === false ? "password" : "text"}
              //   visiblePassword={visiblePassword}
              type="password"
              isSecure
              placeholder="Escribe tu contraseña"
            />
          </InputContainer>
        </div>

        <Button
          type="submit"
          text="Ingresar"
          // Cuando haya conexion con el endpoint vamos a usar el loading para deshabilitar el boton
          // isValid + isDirty, chequea que no hayan errores en el formulario para habilitar el envio de datos, asi evitamos request al pedo
          disabled={!isDirty || !isValid || isLoading}
        />
      </form>
    </div>
  );
}

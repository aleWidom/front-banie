"use client";
// Librerias -> react, luego next, y luego librerias
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

  const {
    handleSubmit,
    register,
    formState: { errors, isDirty, isValid, isLoading },
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
      <Link href="/">
        <Button
          text="Volver"
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
              type="password"
              isSecure
              placeholder="Escribe tu contraseña"
            />
          </InputContainer>
        </div>

        <Button
          type="submit"
          text="Ingresar"
          size="large"
          disabled={!isDirty || !isValid || isLoading}
        />
      </form>
    </div>
  );
}

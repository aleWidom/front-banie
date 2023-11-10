"use client";
// Librerias -> react, luego next, y luego librerias
// import { useContext } from "react";
import { useForm } from "react-hook-form";

// Componentes y resto
import { Button, Input } from "@/components/atoms";
import { InputContainer } from "@/components/molecules/InputContainer";
import { registerUser } from "../../../services/register";

// Estilos, types y constantes por un lado
import styles from "./Register.module.scss";
import { FormValuesRegister } from "./Register.types";
import {
  validationPassword,
} from "./Register.constants";
import Link from "next/link";



export default function Register() {

  const {
    handleSubmit,
    register,
    formState: { errors, isDirty, isValid, isLoading },
    setValue,
    watch
  } = useForm<FormValuesRegister>({
    mode: "onBlur",
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);

    registerUser(false, data)
      .then((response) => {
        if (response) {
          alert("create user correcto");
        } else {
          alert("create user incorrecto");
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
          <h2>Register</h2>
          <InputContainer
            label="Password"
            errorsMessage={errors.password?.message}
          >
            <Input
              {...register("password", validationPassword)}
              type="password"
              isSecure
              placeholder="Escribe tu contraseña"
            />
          </InputContainer>
          <InputContainer
            label="Confirm Password"
            errorsMessage={errors.confirmPassword?.message}
          >
            <Input
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Debe confirmar la contraseña",
                },
                validate: (value: any) => {
                  if (value === watch("password")) {
                    return true
                  } else {
                    return "Las contraseñas no coinciden"
                  }
                }
              })}
              type="password"
              isSecure
              placeholder="Confirmá tu contraseña"
            />
          </InputContainer>
          <InputContainer label="Image" errorsMessage={errors.image?.message}>
            <Input
              onChange={(e: any) => {
                setValue("image", e.target.files[0].name);
              }}
              required
              type="file"
              placeholder="Sube una imagen"
            />
          </InputContainer>
        </div>
        <Button
          size="large"
          type="submit"
          text="Crear cuenta"
          disabled={!isDirty || !isValid || isLoading}
        />
      </form>
    </div>
  );
}

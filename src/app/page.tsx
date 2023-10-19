"use client";
import { useForm } from "react-hook-form";
import { Button, Input } from "@/components/atoms";
import { InputContainer } from "@/components/atoms/InputContainer";
import { loginUser } from "../../services/login";
import { OptionsInputs } from "@/components/molecules/OptionsInputs";
import styles from "./page.module.scss";

const validationEmail = {
  required: {
    value: true,
    message: "Email es requerido",
  },
  pattern: {
    value:
      /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i,
    message: "Formato de email invalido",
  },
};

const validationPassword = {
  required: {
    value: true,
    message: "Password es requerido",
  },
  minLength: {
    value: 6,
    message: "El Password debe contener 6 carácteres como minimo",
  },
  maxLength: {
    value: 8,
    message: "El Password debe contener 8 carácteres como máximo",
  },
};

export default function Home() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
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
    <form onSubmit={onSubmit} className={styles.containerForm}>
      <InputContainer title={"Email"}>
        <Input type="email" {...register("email"), validationEmail} errorsMessage={errors?.email.message} />
      </InputContainer>
      <InputContainer title={"Password"}>
        <Input type="password" {...register("password"), validationPassword}  errorsMessage={errors?.password.message}/>
      </InputContainer>
      <Button />
    </form>
  );
}

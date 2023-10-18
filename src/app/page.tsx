"use client"
import { useForm } from "react-hook-form";
import { Button } from "@/components/atoms";
import { InputLabel } from "@/components/molecules";
import { loginUser } from "../../services/login";
import { OptionsInputs } from "@/components/molecules/OptionsInputs";
import styles from "./page.module.scss";


const validationEmail = {
  required: {
    value: true,
    message: "Email es requerido"
  },
  pattern: {
    value: /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i,
    message: "Formato de email invalido"
  } 
}


const validationPassword = {
  required: {
    value: true,
    message: "Password es requerido"
  },
  minLength: {
    value: 10,
    message: "Password debe contener 10 carácteres de minimo"
  },
  maxLength: {
    value: 20,
    message: "Password debe contener 20 carácteres de máximo"
  },
}


export default function Home() {

  const { handleSubmit, register, formState: { errors } } = useForm()

  const onSubmit = handleSubmit((data) => {
    loginUser(false, data)
    .then((response)=> {
     if(response) {
      alert("login correcto")
     } else {
      alert("login incorrecto")
     }
    })
    .catch((err)=> {
      console.log(err)
    })
  })

  console.log(errors)

  return (
    <form onSubmit={onSubmit} className={styles.containerForm}>
      <InputLabel titleLabel={"Email"} htmlFor={"email"} register={register} validation={validationEmail} errors={errors.email} />
      <InputLabel titleLabel={"Password"} htmlFor={"password"} register={register} validation={validationPassword} errors={errors.password} />
      <Button />
    </form>

  );
}

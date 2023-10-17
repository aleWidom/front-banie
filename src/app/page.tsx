"use client"
import { Button } from "@/components/atoms";
import { InputLabel } from "@/components/molecules";
import { OptionsInputs } from "@/components/molecules/OptionsInputs";
import styles from "./page.module.scss";
import { useForm } from "react-hook-form";


export default function Home() {

  const {handleSubmit, register} = useForm()

  console.log(register)

  const onSubmit = handleSubmit((data)=> {
    console.log(data)
  })

  return (
    <div className={styles.container}>
      <OptionsInputs />
      <div className={styles.containerForm}>
        <form onSubmit={onSubmit}>
          <InputLabel titleLabel={"Email"} htmlFor={"email"} register={register}/>
           <InputLabel titleLabel={"Password"} htmlFor={"password"} register={register}/>   
          <Button />
        </form>
      </div>
    </div>
  );
}

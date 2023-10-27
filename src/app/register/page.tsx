"use client";
// Librerias -> react, luego next, y luego librerias
import { useContext } from "react";
import { InputContext } from "@/context/input";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

// Componentes y resto
import { Button, Input } from "@/components/atoms";
import { InputContainer } from "@/components/molecules/InputContainer";
import { registerUser } from "../../../services/register";

// Estilos, types y constantes por un lado
import styles from "./Register.module.scss";
import { FormValuesRegister } from "./Register.types";
import { validationEmail, validationLastName, validationName, validationPassword, validationUserName } from "./Register.constants";
import Link from "next/link";




export default function Register() {


    const {visiblePassword, setVisiblePassword} = useContext(InputContext)

    const router = useRouter();

    const {
        handleSubmit,
        register,
        formState: { errors, isDirty, isValid, isLoading },
        setValue
        // Tipamos el useForm para que podamos usar bien los errores.
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
            {/* Crear tamaños de botones -> small, medium y bug */}
        
            
            <Link href="/"><Button text="Volver" onClick={()=> {setVisiblePassword(false)}}/></Link>

            <form onSubmit={onSubmit} className={styles.containerForm}>
                <div className={styles.containerInputs}>
                <h2>Register</h2>
                <InputContainer
                        label="Username"
                        errorsMessage={errors.userName?.message}
                    >
                        <Input
                            {...register("userName", validationUserName)}
                            placeholder="Crear username"
                        />
                    </InputContainer>
                    <InputContainer
                        label="Email"
                        errorsMessage={errors.email?.message}
                    >
                        <Input
                            {...register("email", validationEmail)}
                            type="email"
                            placeholder="Escribe tu email"
                        />
                    </InputContainer>
                    <InputContainer
                        label="Name"
                        errorsMessage={errors.name?.message}
                    >
                        <Input
                            {...register("name", validationName)}
                            placeholder="Escribe tu nombre"
                        />
                    </InputContainer>
                    <InputContainer
                        label="Last Name"
                        errorsMessage={errors.lastName?.message}
                    >
                        <Input
                            {...register("lastName", validationLastName)}
                            placeholder="Escribe tu apellido"
                        />
                    </InputContainer>
                    <InputContainer
                        label="Image"
                        errorsMessage={errors.image?.message}
                    >
                        <Input
                            onChange={(e:any)=> {
                                setValue("image", e.target.files[0].name)
                            }}
                            required
                            type="file"
                            placeholder="Sube una imagen"
                        />
                    </InputContainer>
                    <InputContainer
                        label="Password"
                        errorsMessage={errors.password?.message}
                    >
                        <Input
                            {...register("password", validationPassword)}
                            type={visiblePassword === false ? "password" : "text"}
                            visiblePassword={visiblePassword}
                            placeholder="Escribe tu contraseña"
                        />
                    </InputContainer>
                    
                </div>

                <Button
                    type="submit"
                    text="Crear cuenta"
                    // Cuando haya conexion con el endpoint vamos a usar el loading para deshabilitar el boton
                    // isValid + isDirty, chequea que no hayan errores en el formulario para habilitar el envio de datos, asi evitamos request al pedo
                    disabled={!isDirty || !isValid || isLoading}
                />
            </form>
        </div>
    );
}

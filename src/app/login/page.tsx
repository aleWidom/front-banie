"use client";
// Librerias -> react, luego next, y luego librerias
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

// Componentes y resto
import { Button, Input } from "@/components/atoms";
import { InputContainer } from "@/components/molecules/InputContainer";
import { loginUser } from "../../../services/login";

// Estilos, types y constantes por un lado
import styles from "./Login.module.scss";
import { FormValues } from "./Login.types";
import { validationEmail, validationPassword } from "./Login.constants";

export default function Login() {
    const router = useRouter();

    const {
        handleSubmit,
        register,
        formState: { errors, isDirty, isValid, isLoading },
        // Tipamos el useForm para que podamos usar bien los errores.
    } = useForm<FormValues>({
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
            <Button text="Volver" onClick={() => router.back()} />

            <form onSubmit={onSubmit} className={styles.containerForm}>
                <div className={styles.containerInputs}>
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
                        label="Contraseña"
                        errorsMessage={errors.password?.message}
                    >
                        <Input
                            {...register("password", validationPassword)}
                            type="password"
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

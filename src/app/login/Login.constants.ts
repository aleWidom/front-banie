export const validationEmail = {
    required: {
        value: true,
        message: "El email es requerido",
    },
    pattern: {
        value: /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i,
        message: "El email ingresado no es válido",
    },
};

export const validationPassword = {
    required: {
        value: true,
        message: "La contraseña es requerida",
    },
    minLength: {
        value: 6,
        message: "La contraseña debe contener 6 carácteres como minimo",
    },
    maxLength: {
        value: 12,
        message: "La contraseña debe contener 12 carácteres como máximo",
    },
};

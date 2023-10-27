
export const validationUserName = {
    required: {
        value: true,
        message: "El username es requerido.",
    },
    minLength: {
        value: 6,
        message: "El username debe contener 6 carácteres como minimo",
    },
    maxLength: {
        value: 12,
        message: "El username debe contener 12 carácteres como máximo",
    },
};



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


export const validationName = {
    required: {
        value: true,
        message: "El nombre es requerido.",
    },
    minLength: {
        value: 3,
        message: "El nombre debe contener 3 carácteres como minimo",
    }
};


export const validationLastName = {
    required: {
        value: true,
        message: "El apellido es requerido.",
    },
    minLength: {
        value: 3,
        message: "El apellido debe contener 3 carácteres como minimo",
    }
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

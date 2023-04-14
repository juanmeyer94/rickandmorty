const validate = (userData) => {
    const errors = {};
    if (!/\S+@\S+\.\S+/.test(userData.email)) {

    } if (!userData.email) {
        errors.email = 'Debe ingresar un email válido'
    } if (!userData.email.length > 35) {
        errors.email = 'El email no debe superar los 35 caracteres'
    }

    if (userData.password.length < 8 || !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(userData.password)) {
        errors.password = 'La contraseña debe contener al menos 8 caracteres, un número, una letra minuscula, una mayúscula y también un signo(@_#$...)';
    }
    return errors;
}

export default validate;
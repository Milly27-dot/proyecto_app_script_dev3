function guardarUsuario(usuario) {

    try {
        //const {id, nombreCompleto, correo, contraseña } = usuario;
        const sheetUsuarios = obtenerSheet(env_().SH_REGISTRO_USUARIOS);
        Insert(usuario, sheetUsuarios);
        //sheetUsuarios.appendRow([id, nombreCompleto, correo, contraseña])
        return {
            titulo: "Registro Correcto",
            descripcion: "Ya se encuentra el usuario en la base de datos.",
        }
    } catch (error) {
        return {
            titulo: "Una disculpa, pero ha sucedido un error en la solicitud" + error,
            descripcion: "Por favor contacte a soporte.",
        }
    }

}

function listarUsuarios() {
    return obtenerDatos(env_().SH_REGISTRO_USUARIOS);

}
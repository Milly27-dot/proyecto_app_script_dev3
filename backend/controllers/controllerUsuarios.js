function guardarUsuario(usuario) {

    try {
        //const {id, nombreCompleto, correo, contraseña } = usuario;
        const sheetUsuarios = obtenerSheet(env_().SH_REGISTRO_USUARIOS);
        Insert(JSON.parse(usuario), sheetUsuarios);
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

function listarUsuarios(id = undefined){
    //return obtenerDatos(env_().SH_REGISTRO_USUARIOS);
    return JSON.stringify(_read(obtenerSheet(env_().SH_REGISTRO_USUARIOS), id));
}

function actualizarUsuario(id, datos) {
    
    try {
        const sheetUsuarios = obtenerSheet(env_().SH_REGISTRO_USUARIOS);
        Update(id,datos, sheetUsuarios);
        return {
            titulo: "Actualizacion Realizada",
            descripcion: "El Usuario en la base de datos ha sido actualizado.",
        }    
    } catch (error) {
        return {
            titulo: "Una disculpa, pero ha sucedido un error en la solicitud " + error,  
            descripcion: "Por favor contacte a soporte.",
        }
    }
    
    
}
const URI_PRODUCTOS= import.meta.env.VITE_API_PRODUCTOS;
const URI_USUARIOS= import.meta.env.VITE_API_USUARIOS;

console.log(URI_PRODUCTOS);

//GET
export const leerProductosAPI = async()=>{
    try{
        const respuesta = await fetch(URI_PRODUCTOS);
        /* console.log(respuesta); */
        const listaProductos = await respuesta.json();
        /* console.log(listaProductos); */
        return listaProductos;
    }catch (error){
        console.log(error)
    }
}


// POST (CREAR)
export const crearProductoAPI = async (productoNuevo)=>{
    try {
        const respuesta = await fetch(URI_PRODUCTOS, {
            method: "POST",
            headers: {"Content-Type":"application/json"
        },
        body: JSON.stringify(productoNuevo)
     });
        console.log(respuesta)
        return respuesta

    } catch (error) {
        console.log(error)
    }
}


// DELETE (BORRAR)
export const borrarProductoAPI = async (id)=>{
    try {
        const respuesta = await fetch(`${URI_PRODUCTOS}/${id}`, {
            method: "DELETE",
            });
        console.log(respuesta)
        return respuesta

    } catch (error) {
        console.log(error)
    }
}

// POST (CREAR)
export const crearUsuarioAPI = async (usuarioNuevo)=>{
    try {
        const respuesta = await fetch(URI_USUARIOS, {
            method: "POST",
            headers: {"Content-Type":"application/json"
        },
        body: JSON.stringify(usuarioNuevo)
     });
        console.log(respuesta)
        return respuesta

    } catch (error) {
        console.log(error)
    }
}
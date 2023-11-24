"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function HomePage ({params}){
    const [newUsuario,setNewUsuario]=useState({
        nombre: "",
        usuario: "",
        password: ""
    });

    const router = useRouter();
    //const params = useParams();


    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(newUsuario);

        const res = await fetch(`/api/usuario/`,{
            method:'POST',
            body:JSON.stringify(newUsuario)
        })

        const data = await res.json();
        console.log(data);
        router.push('/usuario');
        router.refresh();
    }


    const handlerChange=(e)=>{
        //console.log(e.target.value)
        setNewUsuario({...newUsuario,[e.target.name]:e.target.value})
    }



return(
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">

        <form onSubmit={handlerSubmit}>
        <input type="text" name="nombre" placeholder="Ingrese Nombre del usuario"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newUsuario.nombre}/>


        <input type="text" name="usuario" placeholder="Ingrese Usuario"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newUsuario.usuario}/>

        <input type="password" name="password" placeholder="Ingrese Contraseña"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newUsuario.password}/>

       
        <button type="submit"
        className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >Crear usuario</button>
    </form>
    </div>

)
}
export default HomePage
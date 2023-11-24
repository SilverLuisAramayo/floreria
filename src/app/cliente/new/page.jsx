"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function HomePage ({params}){
    const [newCliente,setNewCliente]=useState({
        nombre:"",
        documento:"",
        email:"",
        telefono:"",
        direccion:"",
        orden:"1"
    });

    const router = useRouter();
    //const params = useParams();

    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(newCliente);

        const res = await fetch(`/api/cliente/`,{
            method:'POST',
            body:JSON.stringify(newCliente)
        })

        const data = await res.json();
        console.log(data);
        router.push('/cliente');
        router.refresh();
    }

   
    const handlerChange=(e)=>{
        //console.log(e.target.value)
        setNewCliente({...newCliente,[e.target.name]:e.target.value})
    }

  

return(
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">

        <form onSubmit={handlerSubmit}>
        <input type="text" name="nombre" placeholder="Ingrese Nombre"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newCliente.nombre}/>


        <input type="text" name="documento" placeholder="Ingrese Documento"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newCliente.documento}/>

        <input type="email" name="email" placeholder="Ingrese Email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newCliente.email}/>

        <input type="text" name="telefono" placeholder="Ingrese Telefono"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newCliente.telefono}/>

        <input type="text" name="direccion" placeholder="Ingrese Direccion"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newCliente.direccion}/>

        
        <input type="text" name="orden" placeholder="asignar un orden 1,2,3,4"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg  w-full  p-4  my-1"
        onChange={handlerChange} value={newCliente.orden}/>
        <button type="submit"
        className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >Crear cliente</button>
    </form>
    </div>

)
}
export default HomePage
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
        orden:"1",
    });

    const router = useRouter();
    //const params = useParams();

    const getCliente = async ()=>{
        const res = await fetch(`/api/cliente/${params.id}`);
        const {clientes} = await res.json();
        console.log(clientes);
        setNewCliente({
            nombre:clientes.nombre,
            documento:clientes.documento,
            email:clientes.email,
            telefono:clientes.telefono,
            direccion:clientes.direccion,
            orden:clientes.orden
        })
    }
    const handleDelete=async()=>{
        //console.log();
        if(window.confirm(`Esta seguro de eliminar la cliente ${newCliente.nombre}`)){
            try {
                const res=await fetch(`/api/cliente/${params.id}`,{
                    method:"DELETE"
                })
                router.push('/cliente');
                router.refresh(); 
            } catch (error) {
                console.log(error)
            }
        }
    }



    useEffect(()=>{
        getCliente()
    },[])

return(
    <div>
        <h1>{params.id}</h1>
            <h1>Eliminar: {newCliente.titulo}</h1>
            <button type="button" className="bg-red-500 px-3 py-1 rounded-md" 
                onClick={handleDelete}>
                    Eliminar Cliente
            </button>
    </div>
)
}
export default HomePage
"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function HomePage ({params}){
    const [newCategoria,setNewCategoria]=useState({
        categoria:"",
        orden:'1',  
    },);

    const router = useRouter();

    const getCategoria = async ()=>{
        const res = await fetch(`/api/categoria/${params.id}`);
        const {categorias} = await res.json();
        console.log(categorias);
        setNewCategoria({
            categoria:categorias.categoria,
            orden:categorias.orden
        })
    }
    const handleDelete=async()=>{
   
        if(window.confirm(`Esta seguro de eliminar la categoria ${newCategoria.categoria}`)){
            try {
                const res=await fetch(`/api/categoria/${params.id}`,{
                    method:"DELETE"
                })
                router.push('/categoria');
                router.refresh(); 
            } catch (error) {
                console.log(error)
            }
        }
    }



    useEffect(()=>{
        getCategoria()
    },[getCategoria])

return(
    <div>
        <h1>{params.id}</h1>
            <h1>Eliminar: {newCategoria.categoria}</h1>
            <button type="button" className="bg-red-500 px-3 py-1 rounded-md" 
                onClick={handleDelete}>
                    Eliminar Categoria
            </button>
    </div>
)
}
export default HomePage
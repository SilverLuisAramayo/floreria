"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function HomePage ({params}){
    const [newVenta,setNewVenta]=useState({
        codigo: "",
        productos: "",
        impuesto: "",
        neto: "",
        total: "",
        orden: '1',
        cliente : "",
        usuario: "",
        producto: ""
    });

    const router = useRouter();
    //const params = useParams();

    const getVenta = async ()=>{
        const res = await fetch(`/api/venta/${params.id}`);
        const {ventas} = await res.json();
        console.log(ventas);
        setNewVenta({
            codigo:ventas.codigo,
            productos:ventas.productos,
            impuesto:ventas.impuesto,
            neto:ventas.neto,
            total:ventas.total,
            orden:ventas.orden,
            cliente:ventas.cliente,
            usuario:ventas.usuario,
            producto:ventas.producto
        })
    }
    const handleDelete=async()=>{
        //console.log();
        if(window.confirm(`Esta seguro de eliminar la venta ${newVenta.codigo}`)){
            try {
                const res=await fetch(`/api/venta/${params.id}`,{
                    method:"DELETE"
                })
                router.push('/venta');
                router.refresh(); 
            } catch (error) {
                console.log(error)
            }
        }
    }



    useEffect(()=>{
        getVenta()
    },[])

return(
    <div>
        <h1>{params.id}</h1>
            <h1>Eliminar: {newVenta.codigo}</h1>
            <button type="button" className="bg-red-500 px-3 py-1 rounded-md" 
                onClick={handleDelete}>
                    Eliminar venta
            </button>
    </div>
)
}
export default HomePage
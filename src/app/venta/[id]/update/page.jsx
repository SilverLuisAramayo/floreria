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
        orden: '1'/*,
        cliente : "",
        usuario: "",
        producto: ""*/
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
            orden:ventas.orden
            /*,
            cliente:ventas.cliente,
            usuario:ventas.usuario,
            producto:ventas.producto*/
        })
    }
    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(newVenta);

        const res = await fetch(`/api/venta/${params.id}`,{
            method:'PUT',
            body:JSON.stringify(newVenta)
        })

        const data = await res.json();
        console.log(data);
        router.push('/venta');
        router.refresh();
    }

    const handleDelete=async()=>{
        //console.log();
        if(window.confirm(`Esta seguro de eliminar al venta ${newVenta.nombre}`)){
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
    const handlerChangeToggle=(e)=>{
        console.log(e.target.checked)
        setNewVenta({...newVenta,[e.target.name]:e.target.checked})
    }
    const handlerChange=(e)=>{
        //console.log(e.target.value)
        setNewVenta({...newVenta,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        getVenta()
    },[])

return(
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">

        <form onSubmit={handlerSubmit}>
        <input type="number" name="codigo" placeholder="Ingrese Codigo de venta"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newVenta.codigo}/>


        <input type="text" name="productos" placeholder="Ingrese Productos"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newVenta.producto}/>

        <input type="number" name="impuesto" placeholder="Ingrese Impuesto"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newVenta.impuesto}/>

        <input type="number" name="neto" placeholder="Ingrese Neto"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newVenta.neto}/>

        <input type="number" name="total" placeholder="Ingrese Total"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newVenta.total}/>

        <input type="number" name="orden" placeholder="Ingrese Orden"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newVenta.orden}/>
        

        <input type="password" name="password" placeholder="Ingrese Contraseña"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newVenta.password}/>

       
        <button type="submit"
        className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >Modificar Venta</button>
    </form>
    </div>

)
}
export default HomePage
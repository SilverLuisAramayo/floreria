"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function HomePage ({params}){
    const [newProducto,setNewProducto]=useState({
        codigoProducto: "",
          descripcion: "",
          imagen: "",
          stock: "",
          precio_compra: "",
          precio_venta: "",
          ventas: "",
          orden:"1"
    });

    const router = useRouter();
    //const params = useParams();

    const getProducto = async ()=>{
        const res = await fetch(`/api/producto/${params.id}`);
        const {productos} = await res.json();
        console.log(productos);
        setNewProducto({
            codigoProducto:productos.codigoProducto,
            descripcion:productos.descripcion,
            imagen:productos.imagen,
            visible:productos.visible,
            stock:productos.stock,
            precio_compra:productos.precio_compra,
            precio_venta:productos.precio_venta,
            ventas:productos.codigoProducto,
            orden:productos.orden
        })
    }
    const handleDelete=async()=>{
        //console.log();
        if(window.confirm(`Esta seguro de eliminar el Producto ${newProducto.codigoProducto}`)){
            try {
                const res=await fetch(`/api/producto/${params.id}`,{
                    method:"DELETE"
                })
                router.push('/producto');
                router.refresh(); 
            } catch (error) {
                console.log(error)
            }
        }
    }



    useEffect(()=>{
        getProducto()
    },[])

return(
    <div>
        <h1>{params.id}</h1>
            <h1>Eliminar: {newProducto.codigoProducto}</h1>
            <button type="button" className="mt-3 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" 
                onClick={handleDelete}>
                    Eliminar Producto
            </button>
      
    </div>
)
}
export default HomePage
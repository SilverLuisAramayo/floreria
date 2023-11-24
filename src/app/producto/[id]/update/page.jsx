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
            ventas:productos.ventas,
            orden:productos.orden
        })
    }
    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(newProducto);

        const res = await fetch(`/api/producto/${params.id}`,{
            method:'PUT',
            body:JSON.stringify(newProducto)
        })

        const data = await res.json();
        console.log(data);
        router.push('/producto');
        router.refresh();
    }

    const handleDelete=async()=>{
        //console.log();
        if(window.confirm(`Esta seguro de eliminar la producto ${newProducto.nombre}`)){
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
    const handlerChangeToggle=(e)=>{
        console.log(e.target.checked)
        setNewProducto({...newProducto,[e.target.name]:e.target.checked})
    }
    const handlerChange=(e)=>{
        //console.log(e.target.value)
        setNewProducto({...newProducto,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        getProducto()
    },[])

return(
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">

        <form onSubmit={handlerSubmit}>
        <input type="text" name="codigoProducto" placeholder="Ingrese Codigo Producto"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newProducto.codigoProducto}/>


        <input type="text" name="descripcion" placeholder="Ingrese Descripcion"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newProducto.descripcion}/>

        <input type="text" name="imagen" placeholder="ingrese url"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg  w-full  p-4  my-1"
        onChange={handlerChange} value={newProducto.imagen}/>

        <input type="text" name="stock" placeholder="Ingrese Stock"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newProducto.stock}/>

        <input type="text" name="precio_compra" placeholder="Ingrese Precio de Compra"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newProducto.precio_compra}/>

        <input type="text" name="precio_venta" placeholder="Ingrese Precio de Venta"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newProducto.precio_venta}/>

        <input type="text" name="ventas" placeholder="Ingrese Ventas"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newProducto.ventas}/>
        
        <input type="text" name="orden" placeholder="asignar un orden 1,2,3,4"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg  w-full  p-4  my-1"
        onChange={handlerChange} value={newProducto.orden}/>
        <button type="submit"
        className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >Modificar Producto</button>
           <button  type="back"
        className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >Volver</button>
    </form>
    </div>

)
}
export default HomePage
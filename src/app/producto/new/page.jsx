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
          orden:"" 
    });
   

    const router = useRouter();
    //const params = useParams();

    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(newProducto);

        const res = await fetch(`/api/producto/`,{
            method:'POST',
            body:JSON.stringify(newProducto)
        })

        const data = await res.json();
        console.log(data);
        router.push('/producto');
        router.refresh();
    }

   
    const handlerChange=(e)=>{
        //console.log(e.target.value)
        setNewProducto({...newProducto,[e.target.name]:e.target.value})
    }

    

return(
    <div className="h-[calc(100vh-7rem)] flex justify-center ">

        

        <form onSubmit={handlerSubmit /*,async(e)=>{
            e.preventDefault()
            const formData = new FormData()
            formData.append('file',file)

            const response = await fetch("/api/upload",{
                method: "POST",
                body: formData,
                headers:{
                    "Content-Type":"multipart/form-data",
                }
                
            });
            const data=await response.json();
                console.log(data);
        }*/
        }
        >
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
        >Crear Producto</button>
        <button  type="back"
        className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >Volver</button>
     
    </form>
    </div>

)
}
export default HomePage
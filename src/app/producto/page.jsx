import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { buttonVariants } from "@/components/ui/button"

  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {
    faTrashCan,
    faPenToSquare,faPlus
  } from "@fortawesome/free-solid-svg-icons";




export const feachProductos=()=>{
   return fetch('http://localhost:3000/api/producto',{ cache: 'no-store'} )
   //return fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json());
}

export default async function Productos(){
    const {productos}= await feachProductos();
    console.log(productos);
    return(
        <div>
            <h1 className="text-3xl">Lista de Productos</h1>
            <div className="my-4">
                 <Link href='/producto/new' className={buttonVariants({ variant: "outline" })} >
                <FontAwesomeIcon icon={faPlus} size="2x" className="mx-2" />   Nueva Producto
            </Link>
            </div>
           

            <div className="grid grid-cols-3 gap-2">
                {
                    productos.map(producto=>(
                        <Card key={producto._id}>
                            <CardHeader>
                                <CardTitle>{producto.codigoProducto}</CardTitle>
                                <CardDescription >{producto.descripcion}     </CardDescription>
                                <CardDescription className="w-20 h-20"><img src={producto.imagen} alt="" /> </CardDescription>
                            </CardHeader>
                            <CardFooter className="grid grid-cols-2 grid-flow-row gap-4">
                                        <Link href={`/producto/${producto._id}/delete`}>
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </Link>
                                        <Link href={`/producto/${producto._id}/update`}>
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                        </Link>
                            </CardFooter>
                        </Card>
                    ))
                }
            </div> 
        </div>
    )

}
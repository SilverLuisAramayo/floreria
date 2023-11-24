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




export const feachVentas=()=>{
   return fetch('http://localhost:3000/api/venta',{ cache: 'no-store'} )
   //return fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json());
}

export default async function Ventas(){
    const {ventas}= await feachVentas();
    console.log(ventas);
    return(
        <div>
            <h1 className="text-3xl">Lista de Ventas</h1>
            <div className="my-4">
                 <Link href='/venta/new' className={buttonVariants({ variant: "outline" })} >
                <FontAwesomeIcon icon={faPlus} size="2x" className="mx-2" />   Nueva Venta
            </Link>
            </div>
           

            <div className="grid grid-cols-3 gap-2">
                {
                    ventas.map(venta=>(
                        <Card key={venta._id}>
                            <CardHeader>
                                <CardTitle>Codigo: {venta.codigo}</CardTitle>
                                <CardDescription>Total:{venta.total} Bs</CardDescription>
                            </CardHeader>
                            <CardFooter className="grid grid-cols-2 grid-flow-row gap-4">
                                        <Link href={`/venta/${venta._id}/delete`}>
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </Link>
                                        <Link href={`/venta/${venta._id}/update`}>
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
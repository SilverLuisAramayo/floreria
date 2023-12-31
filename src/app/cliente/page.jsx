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





export const feachClientes=()=>{
   return fetch('http://localhost:3000/api/cliente',{ cache: 'no-store'} )
   //return fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json());
}

export default async function Clientes(){
    const {clientes}= await feachClientes();
    console.log(clientes);
    return(
        <div>
            <h1 className="text-3xl">Lista de Clientes</h1>
            <div className="my-4">
                 <Link href='/cliente/new' className={buttonVariants({ variant: "outline" })} >
                <FontAwesomeIcon icon={faPlus} size="2x" className="mx-2" />   Nueva Cliente
            </Link>
            </div>
           

            <div className="grid grid-cols-3 gap-2">
                {
                    clientes.map(cliente=>(
                        <Card key={cliente._id}>
                            <CardHeader>
                                <CardTitle>{cliente.nombre}</CardTitle>
                                <CardDescription>Telefono: {cliente.telefono}</CardDescription>
                            </CardHeader>
                            <CardFooter className="grid grid-cols-2 grid-flow-row gap-4">
                                        <Link href={`/cliente/${cliente._id}/delete`}>
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </Link>
                                        <Link href={`/cliente/${cliente._id}/update`}>
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
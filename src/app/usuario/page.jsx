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




export const feachUsuarios=()=>{
   return fetch('http://localhost:3000/api/usuario',{ cache: 'no-store'} )
   .then(res=>res.json());
}

export default async function Usuarios(){
    const {usuarios} = await feachUsuarios();
    console.log(usuarios);
    return(
        <div>
            <h1 className="text-3xl">Lista de Usuarios</h1>
            <div className="my-4">
                 <Link href='/usuario/new' className={buttonVariants({ variant: "outline" })} >
                <FontAwesomeIcon icon={faPlus} size="2x" className="mx-2" />   Nuevo Usuario
            </Link>
            </div>
           

            <div className="grid grid-cols-3 gap-2">
                {
                    usuarios.map(usuario=>(
                        <Card key={usuario._id}>
                            <CardHeader>
                                <CardTitle>{usuario.nombre}</CardTitle>
                                <CardDescription>Usuario:{usuario.usuario}</CardDescription>
                            </CardHeader>
                            <CardFooter className="grid grid-cols-2 grid-flow-row gap-4">
                                        <Link href={`/usuario/${usuario._id}/delete`}>
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </Link>
                                        <Link href={`/usuario/${usuario._id}/update`}>
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
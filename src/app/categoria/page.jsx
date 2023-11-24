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





export const feachCategorias=()=>{
   return fetch('http://localhost:3000/api/categoria',{ cache: 'no-store'} )
   //return fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json());
}

export default async function Categorias(){
    const {categorias}= await feachCategorias();
    console.log(categorias);
    return(
        <div>
            <h1 className="text-3xl">Lista de Categorias</h1>
            <div className="my-4">
                 <Link href='/categoria/new' className={buttonVariants({ variant: "outline" })} >
                <FontAwesomeIcon icon={faPlus} size="2x" className="mx-2" />   Nueva categoria
            </Link>
            </div>
           

            <div className="grid grid-cols-3 gap-2">
                {
                    categorias.map(categoria=>(
                        <Card key={categoria._id}>
                            <CardHeader>
                                <CardTitle>{categoria.categoria}</CardTitle>
                                <CardDescription>Categorias</CardDescription>
                            </CardHeader>
                            <CardFooter className="grid grid-cols-2 grid-flow-row gap-4">
                                        <Link href={`/categoria/${categoria._id}/delete`}>
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </Link>
                                        <Link href={`/categoria/${categoria._id}/update`}>
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
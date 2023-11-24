import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPenToSquare
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link"
function UsuarioCard({usuario}) {
  return (
          <div className="bg-gray-700 p-10 mt-5 text-white rounded-xl hover:bg-gray-500" >
              <h1>{usuario.nombre}</h1>
              <div className="space-between">
                <Link href={`/usuario/${usuario._id}/delete`}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </Link>
                <Link href={`/usuario/${usuario._id}/update`}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </Link>
              </div>
                            
          </div>

  )
}

export default UsuarioCard
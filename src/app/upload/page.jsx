"use client";
import { useState } from "react";


function HomePage (){
    const[file,setFile] = useState(null);
    const[imageUrl,setImageUrl] = useState(null)
return (
    <div>
        <form onSubmit={async (e) => {
            e.preventDefault()
            const formData = new FormData()
            formData.append("image", file)

            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,

            });
            const data = await response.json();
            console.log(data);
            setImageUrl(data.url)
        }
        }
        >
            <input type="file" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
            rounded-lg w-full p-4 my-1" onChange={(e) =>{
                setFile(e.target.files[0]);
                
            }} />
            <button>
                subir
            </button>
        </form>
        {
            imageUrl&&(
                <img src={imageUrl} alt="" />
            )
        }
    </div>
)
}
export default HomePage

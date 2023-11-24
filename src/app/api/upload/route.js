import { NextResponse } from "next/server";
import { writeFile } from "fs/promises"
import {v2 as cloudinary} from 'cloudinary';
import path from "path" ;   

cloudinary.config({ 
  cloud_name: 'dpexvncxl', 
  api_key: '716741777342458', 
  api_secret: 'lHakVb71epVKJtPCXCHXwBNnG5o' 
});

export async function POST(request){
    const data = await request.formData();
    const image = data.get("image");

    if(!image){
        return NextResponse.json("no se ha subido ninguma imagen",{status:400});

    }
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

   // const filePath = path.join(process.cwd(), "public",image.name);
    //await writeFile(filePath, buffer)

    const response = await new Promise((resolve,reject)=>{
        cloudinary.uploader.upload_stream({}, (err,result)=>{
            if(err){
                reject(err)
            }
            resolve(result);
        }).end(buffer);
    });

    console.log(response)

    return NextResponse.json({
        message: "imagen subida",
        url:response.secure_url
    });
} 
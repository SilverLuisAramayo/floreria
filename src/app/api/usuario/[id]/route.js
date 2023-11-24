import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Usuarios from '@/models/usuario';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const usuarios= await Usuarios.findById(id);

        if(!usuarios){
            return NextResponse({
                mensaje:"Usuario no encontrado"
            },{status:400})
        }

        return NextResponse.json({
        usuarios
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}


export async function DELETE(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const usuarios= await Usuarios.deleteOne({'_id':id});
        
        if(!usuarios){
            return NextResponse({
                mensaje:"Usuario no encontrado"
            },{status:400})
        }

        return NextResponse.json({
        usuarios
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}



export async function PUT(request,{params}){
    try {
        await connectDB();
        const data = await request.json();
        const id = params.id; 
        const usuarioUpdated=await Usuarios.findByIdAndUpdate(id,data,{new:true});
        
        if(!usuarioUpdated){
            return NextResponse({
                mensaje:"Usuario no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            usuarioUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}

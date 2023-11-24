import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Categorias from '@/models/categoria';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const categorias= await Categorias.findById(id);

        if(!categorias){
            return NextResponse({
                mensaje:"Categoria no encontrada"
            },{status:400})
        }

        return NextResponse.json({
        categorias
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
        const categorias= await Categorias.deleteOne({'_id':id});
        
        if(!categorias){
            return NextResponse({
                mensaje:"Categoria no encontrada"
            },{status:400})
        }

        return NextResponse.json({
        categorias
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
        const categoriaUpdated=await Categorias.findByIdAndUpdate(id,data,{new:true});
        
        if(!categoriaUpdated){
            return NextResponse({
                mensaje:"Categoria no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            categoriaUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}
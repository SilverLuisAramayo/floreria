import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Productos from '@/models/producto';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const productos= await Productos.findById(id);

        if(!productos){
            return NextResponse({
                mensaje:"Producto no encontrado"
            },{status:400})
        }

        return NextResponse.json({
        productos
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
        const productos= await Productos.deleteOne({'_id':id});
        
        if(!productos){
            return NextResponse({
                mensaje:"Producto no encontrado"
            },{status:400})
        }

        return NextResponse.json({
        productos
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
        const productoUpdated=await Productos.findByIdAndUpdate(id,data,{new:true});
        
        if(!productoUpdated){
            return NextResponse({
                mensaje:"Producto no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            productoUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}
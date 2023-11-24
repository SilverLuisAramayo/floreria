import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Ventas from '@/models/venta';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const ventas= await Ventas.findById(id);

        if(!ventas){
            return NextResponse({
                mensaje:"Venta no encontrado"
            },{status:400})
        }

        return NextResponse.json({
        ventas
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
        const ventas= await Ventas.deleteOne({'_id':id});
        
        if(!ventas){
            return NextResponse({
                mensaje:"venta no encontrado"
            },{status:400})
        }

        return NextResponse.json({
        ventas
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
        const ventaUpdated=await Ventas.findByIdAndUpdate(id,data,{new:true});
        
        if(!ventaUpdated){
            return NextResponse({
                mensaje:"Venta no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            ventaUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}

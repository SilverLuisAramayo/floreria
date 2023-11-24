import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Clientes from '@/models/cliente';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const clientes= await Clientes.findById(id);

        if(!clientes){
            return NextResponse({
                mensaje:"Cliente no encontrado"
            },{status:400})
        }

        return NextResponse.json({
        clientes
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
        const clientes= await Clientes.deleteOne({'_id':id});
        
        if(!clientes){
            return NextResponse({
                mensaje:"Cliente no encontrado"
            },{status:400})
        }

        return NextResponse.json({
        clientes
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
        const clienteUpdated=await Clientes.findByIdAndUpdate(id,data,{new:true});
        
        if(!clienteUpdated){
            return NextResponse({
                mensaje:"Cliente no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            clienteUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}
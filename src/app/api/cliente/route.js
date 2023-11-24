import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Clientes from '@/models/cliente';

export async function GET(){
    try {
        await connectDB();
        const clientes= await Clientes.find();
        return NextResponse.json({
        clientes
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}
export async function POST(request){
    try {
        await connectDB();
        const data = await request.json();
        const newCliente = new Clientes(data); 
        const respuesta = await newCliente.save();
        console.log(data);
        return NextResponse.json({
        respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}
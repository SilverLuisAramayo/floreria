import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Ventas from '@/models/venta';

export async function GET(){
    try {
        await connectDB();
        const ventas= await Ventas.find();
        return NextResponse.json({
        ventas
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
        const newVenta = new Ventas(data); 
        const respuesta = await newVenta.save();
        console.log(data);
        return NextResponse.json({
        respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}

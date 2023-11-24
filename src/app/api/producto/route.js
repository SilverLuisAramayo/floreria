import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Productos from '@/models/producto';

export async function GET(){
    try {
        await connectDB();
        const productos = await Productos.find();
        return NextResponse.json({
        productos
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
        const newProducto = new Productos(data); 
        const respuesta = await newProducto.save();
        console.log(data);
        return NextResponse.json({
        respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}

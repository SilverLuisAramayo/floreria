import mongoose from 'mongoose';

const { Schema,model,models/*,ObjectId */} = mongoose;

const ventaSchema = new Schema({
  codigo:{
    type:Number,
    trim:true,
    required:[true,"El codigo es obligatorio"]
  },
  productos:{
    type:String,
    trim:true,
  },
  impuesto:{
    type:Number,
    trim:true,
    required:[true,"El impuesto es obligatorio"]
  },
  neto:{
    type:Number,
    trim:true,
    required:[true,"El precio neto es obligatorio"]
  },
  total:{
    type:Number,
    trim:true,
    required:[true,"El precio total es obligatorio"]
  }/*,
  orden:{
    type:Number,
    default:0
  },
  cliente:{
    type:ObjectId,
    ref:'Cliente'
  },
  usuario:{
    type:ObjectId,
    ref:'Usuario'
  },
  producto:{
    type:ObjectId,
    ref:'Producto'
  }*/
  
},
{
    timestamps:true
}
);

export default models.Venta || model('Venta',ventaSchema);
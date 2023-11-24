import mongoose from 'mongoose';

const { Schema,model,models } = mongoose;

const productoSchema = new Schema({
  codigoProducto:{
    type:String,
    trim:true,
    required:[true,"El codigo es obligatorio"]
  },
  descripcion:{
    type:String,
    trim:true,
    required:[true,"Descripcion Obligatorio"]
  },
  imagen:{
    type:String,
    trim:true,
    required:[true,"La imagen es obligatorio"],
    default:'#'
  },
  stock:{
    type:Number,
    trim:true
  },
  precio_compra:{
    type:Number,
    trim:true,
    required:[true,"El precio es obligatorio"]
  },
  precio_venta:{
    type:Number,
    trim:true,
    required:[true,"El precio es obligatorio"]
  },
  ventas:{
    type:Number,
    trim:true
  },
  orden:{
    type:Number,
    default:0
  }
  
},
{
    timestamps:true
}
);

export default models.Producto || model('Producto',productoSchema);
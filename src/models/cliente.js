import mongoose from 'mongoose';

const { Schema,model,models } = mongoose;

const clienteSchema = new Schema({
  nombre:{
    type:String,
    trim:true,
    required:[true,"El nombre es obligatorio"]
  },
  documento:{
    type:Number,
    trim:true,
    required:[true,"Documento Obligatorio"],
  },
  email:{
    type:String,
    trim:true,
    required:[true,"El email es obligatorio"]
  },
  telefono:{
    type:String,
    trim:true,
    required:[true,"El telefono es obligatorio"]
  },
  direccion:{
    type:String,
    trim:true,
    required:[true,"La direccion es obligatoria"]
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

export default models.Cliente || model('Cliente',clienteSchema);
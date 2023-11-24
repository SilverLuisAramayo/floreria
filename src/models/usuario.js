import mongoose from 'mongoose';
const { Schema,model,models } = mongoose;
const usuarioSchema = new Schema({
  nombre:{
    type:String,
    unique:true,
    trim:true,
    required:[true,"El nombre es obligatorio"]
  },
  usuario:{
    type:String,
    unique:true,
    trim:true,
    required:[true,"El usuario es obligatorio"]
  },
  password:{
    type:String,
    unique:true,
    trim:true,
    required:[true,"El password es obligatorio"]
  }
},
{
    timestamps:true
}
);

export default models.Usuario || model('Usuario',usuarioSchema);
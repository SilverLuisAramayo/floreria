import mongoose from 'mongoose';

const { Schema,model,models } = mongoose;

const categoriaSchema = new Schema({
  categoria:{
    type:String,
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

export default models.Categoria || model('Categoria',categoriaSchema);
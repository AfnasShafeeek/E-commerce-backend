import mongoose from "mongoose";


const {Schema} = mongoose

const productSchema = new Schema({
  name: {type:String,required:true},
  description: {type:String,required:true},
  price: {type:Number,required:true},
  image: String,
  category: {type:String,required:true},
});


const newModel= mongoose.model('userCollection',productSchema)

export default newModel
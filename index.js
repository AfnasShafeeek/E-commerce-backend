import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from "dotenv";
import userRoute from './Router/product.js'

 dotenv.config();
 const app= express()
 app.use(cors());
  app.use(express.json())
 app.use('/product',userRoute)


 const dbConnecter =async ()=>{
     try{
        const connecter = await mongoose.connect(process.env.MONGO_URI)
        console.log("Db got connected")

     }catch(e){
         console.log("Db error : ",e)
     }
 }

 dbConnecter();

 

const port = process.env.PORT || 2500

 app.listen(port,()=>{
     console.log("Conneced server succesfully at :",port);
 })


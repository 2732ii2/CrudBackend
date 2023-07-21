

import mongoose from "mongoose";

const DB =
  "mongodb+srv://Mkhan:Ashad123@cluster0.uydprj9.mongodb.net/?retryWrites=true&w=majority";
export const connection=()=>{

    try{
        mongoose.connect(DB,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        });
        console.log("Db is connected");
    }
    catch(e){
        console.log("there is some error in DB connection");
    }
}
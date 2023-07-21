import express from "express";
const app=express();
import cors from "cors";
app.use(express.json());
app.use(cors());


import UserModel from "./Schema.js";

import {connection} from "./datab.js";

app.post('/send',async (req,res)=>{
    console.log(req.body);
    try{
        var validate= await  UserModel(req.body);
        console.log(validate);
        await validate.save();
        res.json({ mess: "all is well" });
        
    }    
    catch(e)
    {
        console.log(e.message);
    }
})


app.post("/delete", async (req, res) => {
  console.log(req.body.data);
  try {
    //    await UserModel(req.body);
    await UserModel.deleteOne({ _id: req.body.data });
    res.json({ mess: "data is deleted" });
  } catch (e) {
    console.log(e.message);
  }
});

app.post("/update", async (req, res) => {
  var {data1,data2}=(req.body.data);
  console.log(data1,data2[0]);
  try {
    //    await UserModel(req.body);
    // await UserModel.deleteOne({ _id: req.body.data });
    const result_ = await UserModel.updateOne({ _id: data2[0] }, data1);
    console.log(result_);
    res.json({ mess: "data is updated" });
  } catch (e) {
    console.log(e.message);
  }
});


app.get("/get", async (req, res) => {
  try {
    var users = await UserModel.find();
    // await validate.save();
    console.log(users);
    res.json(users);
  } catch (e) {
    console.log(e.message);
  }
});

connection();

const Port = process.env.Port || 7700;
app.listen(Port,()=>{
    console.log("connected");
})
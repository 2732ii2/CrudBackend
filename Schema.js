
import {Schema,model} from "mongoose";


const UserSchema=new Schema({
    title:String,
    author:String,
    status:String,
    price:Number
});


const UserModel=model("userBooks",UserSchema);

export default UserModel;


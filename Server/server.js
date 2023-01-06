import mongoose from "mongoose";
import app from "../server/app.js";
const mongodb = "mongodb+srv://Aravinda:ara199913@cluster0.us2ntzu.mongodb.net/?retryWrites=true&w=majority";


const PORT = process.env.PORT || 5000;

mongoose.set('strictQuery', false);
mongoose.connect(mongodb).then(()=>{
    console.log(`Serve is listning to port ${PORT}`);
    app.listen(5000)
}).catch((err)=>{
    console.log(err);
})
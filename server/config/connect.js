import mongoose from "mongoose"
function dbConnect(){
    mongoose.connect("mongodb://localhost:27017/Bromag").then(()=>{
        console.log("Database connected");
    }).catch((err)=>{
        console.log("Database error:\n" +err);
    })
}

export default dbConnect;
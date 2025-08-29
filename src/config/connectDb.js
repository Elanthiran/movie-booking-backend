const mongoose =require("mongoose")

const connectDb=async()=>
{
    try{
        const connect=await mongoose.connect("mongodb+srv://elanthirank:booking@cluster0.yhbe2je.mongodb.net/")
        console.log(`${connect.connection.host}-${connect.connection.name}`)
    }
    catch(err)
    {
        console.log(err)
    }
}


module.exports=connectDb
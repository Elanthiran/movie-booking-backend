const Theatre=require("../models/theaterModel");

const postTheatre =async(req,res)=>
{
  try {
    const theatres = req.body; // expecting array of city objects
        if (!Array.isArray(theatres)) {
          return res.status(400).json({ error: "Request body should be an array of theatres" });
        }
        const saved = await Theatre.insertMany(theatres);
        res.status(201).json({ message: "theatres saved", data: saved });
        
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
  } 
   

const getTheatre=async(req,res)=>
{
try{
const theatres=await Theatre.find({});
res.json(theatres);
}   
catch(error){
res.status(500).json({message:error.message})
} 
}


module.exports={postTheatre,getTheatre}
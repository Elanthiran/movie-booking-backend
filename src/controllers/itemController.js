
const Item=require("../models/itemModels")


const dataForPosting =async(req,res)=>
{
    try{
 const newItems=new Item(req.body);
    const saveTheItems=await newItems.save()
    res.status(201).json(saveTheItems)
    }
    catch(err)
    {
        res.status(400).json({message:err.message})
    }
   
}

const dataForGetting=async(req,res)=>
{
try{
const items=await Item.find();
res.json(items);
}   
catch(error){
res.status(500).json({message:error.message})
} 
}


module.exports={dataForGetting,dataForPosting}
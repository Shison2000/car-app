const mongoose=require("mongoose")
const carschema=new mongoose.Schema(
    {
        carname:String,
        carmodel:String,
        carprice:String
    }
)

module.exports=mongoose.model("car",carschema)
const express=require("express")
const carModel=require("../models/carmodel")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let car=new carModel(data)
    let result=await car.save()
    res.json({
        status:"success"
    })
})

module.exports=router
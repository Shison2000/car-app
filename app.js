const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const carroute=require("./controllers/carrouter")


//allias name
const app=express()

//middleware
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://shison2000:shison@cluster0.zexubyw.mongodb.net/carDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

//routing
app.use("/api/car",carroute)


app.listen(3001,()=>{
    console.log("server is running ...")
})
const express = require("express");
const app = express();
require("dotenv/config")


const  cors = require("cors");
const {default : mongoose} = require("mongoose");

app.use(cors ( {origin: true}));

app.get("/", (req,res)=>{
    return res.json("hi there.....")
})

//user authientication rout
const userRoute =require("./routes/auth");
app.use("/api/users/" ,  userRoute);


mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true });
mongoose.connection
.once("open",() => console.log("connected"))
.on("error",(error)=>{
    console.log(`ERROR : ${error}`);
})

app.listen(4000,()=> console.log("listening to port 4000"));
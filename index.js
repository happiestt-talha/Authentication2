const connectToMongo=require('./db');
const express=require('express');
const port= 3000;
connectToMongo();
const app = express()
app.use(express.json())
app.get('/',(req,res)=>{
    res.json({msg:"You are on main page"})
})
app.listen(port,()=>{
    console.log(`Listening on port http://localhost:${port}`)
})
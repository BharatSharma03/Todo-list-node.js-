import express from 'express';
const app= express();
app.get("/",(req,res)=>{
    res.send("This is a new project")
})
app.listen(3200);

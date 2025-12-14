import { render } from 'ejs';
import express from 'express';
import path from 'path'
const app= express();

const publicpath = path.resolve('public')
app.use(express.static(publicpath))
app.set("view engine",'ejs')
app.get("/",(req,res)=>{
    res.render('list')

})

app.get("/add",(req,res)=>{
    res.render('add')
})

app.get("/update",(req,res)=>{
    res.render('update')
})
app.post("/add",(req,res)=>{
    res.redirect('/')
})

app.post("/update",(req,res)=>{
    res.redirect('/')
})


app.listen(3200);

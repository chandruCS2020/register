const express = require('express');
    app = express.Router(),
    validator=require("validator"),
    User=require("../db/user")

app.post("/signup",async (req,res)=>{
    try{
        const {firstName,lastName,email,password}=req.body;
        let newUser=new User({firstName,lastName,email,password});
        await newUser.save();
        res.send(newUser);
    }catch(err){
        res.status(400).send(err.message)
    }
})

module.exports=app;
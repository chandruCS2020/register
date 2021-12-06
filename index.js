const express=require("express"),
    app=express(),
    userrRouter=require("./src/user/user");

require("./src/db/connect");

//configs
app.use(express.json());

//routers merge
app.use(userrRouter)


app.get("/*",(req,res)=>{
    res.status(302).send();
})


app.listen(process.env.PORT,()=>{
    console.log("server running");
})
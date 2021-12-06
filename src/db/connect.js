const mongoose=require("mongoose");




mongoose.connect(process.env.DBURL)
.then(()=>{
    console.log("db connted!")
})
.catch((err)=>{
    console.log(err.message);
})
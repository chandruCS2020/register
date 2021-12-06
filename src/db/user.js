const mongoose=require("mongoose"),
    validator=require("validator"),
    bcryptjs=require("bcryptjs")


const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        maxlength:[50,"max char exceeds"]
    },
    lastName:{
        type:String,
        required:true,
        maxlength:[50,"max char exceeds"]
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(email){
            if(!validator.isEmail(email))throw new Error("invalid email")
        }
    },
    password:{
        type:String,
        required:true
    }

})

userSchema.pre("save",function(){
    if(this.isModified("password")){
        var hash = bcryptjs.hashSync(this.password, 10);
        this.password=hash;
    }
})

const User=mongoose.model("User",userSchema);

module.exports=User;
let mongoose=require('mongoose')
let Schemas=mongoose.Schema
let userSchemas=new Schemas({
    user:String,
    psw:String,

})
module.exports=userSchemas
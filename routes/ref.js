let express = require('express');
let router = express.Router();
let User=require("../models/mongoose")

let util=require('./../util/util')
/* GET users listing. */
router.post("/", function (req, res, next) {
    let username = req.body.user
    let userpsw = req.body.user
    let user = {
        username: username,
        userpsw: userpsw
    }
    User.find({user:user.username,psw:userpsw},(error,data)=>{
        console.log(data.length)
        if(data.length!=0){
            res.render("success")
        }else{
            User.create({user:user.username,psw:userpsw},(error)=>{
                if(error){
                    console.log(error)
                }
            })
            res.redirect('logins')
        }
    })
    /*for(let i=0;i<users.length;i++){
        if(user.username===users[i].username){
            res.render("success")
        }else{
            users.push(user)
            res.redirect('logins')
        }
    }
    console.log(users)*/
})
let users =util

module.exports = router

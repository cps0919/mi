var express = require('express');
var router = express.Router();
let User=require('../models/mongoose')

let util = require('./../util/util')
let users=util
/* GET home page. */
router.post("/", function (req, res, next) {
    let loguser = req.body.user
    let logpsw = req.body.psw
    let user = {
        loguser: loguser,
        logpsw: logpsw
}
    User.find({user:user.loguser,psw:logpsw},(error,data)=>{
        if (data.length!=0){
            res.render('main')
        } else {
            res.render("gozhuce")
        }
    })
    /*let logins=users.filter(function (item) {
        return item.username===user.loguser
    })
    if(logins){
        if(logins[0].userpsw==user.logpsw||user.logpsw==null){
            res.render('main')
        }else{
            res.render("gozhuce")
        }
    }else{
        res.render("gozhuce")
    }
    console.log(users)
    console.log(logins)*/
    /*for(let i=0;i<users.length;i++){
        if(user.loguser===users[i].username){
            if(user.logpsw===users[i].userpsw) {
                res.render('main')
            }else{
                res.render("gozhuce")
            }
        }else{
            res.render("gozhuce")
        }
    }*/
})

module.exports = router;

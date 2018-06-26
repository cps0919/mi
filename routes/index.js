var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/',(req,res,next)=>{
  res.render('main',{title:"main"})
})
router.get('/logins',(req,res)=>{
    res.render('login',{title:"login"})
})
router.get('/refs', function(req, res, next) {
    res.render('ref',{title:"zhuce"})
});
module.exports = router;

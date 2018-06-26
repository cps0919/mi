let mongoose = require('mongoose')
let config = require('../config/config')
let Schema = require('../schemas/Schema')
mongoose.connect(config)
let db = mongoose.connection
let User = mongoose.model('U_db', Schema)
db.on('connect', (error) => {
    if (!error) {
        console.log("连接成功")
    }
})
db.on('error', (error) => {
    if (!error) {
        console.log("连接错误")
    }
})
db.on('close', (error) => {
    if (!error) {
        console.log("连接断开")
    }
})
module.exports = User
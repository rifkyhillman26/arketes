var express = require('express')
var cors = require('cors')
var app = express()
var route = require('./routes/index.js')
var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/arkademy", { useNewUrlParser: true})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use('/', route)

app.listen(3000, function(req,res) {
    console.log('server udah jalan di port 3000')
})
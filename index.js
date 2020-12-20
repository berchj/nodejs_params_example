const express = require('express')
const app = express()
const port = 4800
const routes = require('./routes/router')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/api',routes)
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})
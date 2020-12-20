const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.status(200).send('Welcome')
})

router.get('/client/:id',(req,res)=>{
    res.status(200).send(`Welcome client id: ${req.params.id}`)
})

router.get('/client/:id/account/:account',(req,res)=>{
    res.status(200).send(`Welcome client id: ${req.params.id} to account : ${req.params.account}`)
})

router.get('/client/:id/account/:account/order/:order',(req,res)=>{
    res.status(200).send(`Welcome client id: ${req.params.id} to account : ${req.params.account} to the order : ${req.params.order}`)
})

module.exports = router 
const express = require('express')
const app =express()// define the routes/middleware and handle incoming HTTP requests.for an express app instance.
const mpesa=require ('mpesa')

//setting up daraja API  credentials
const credentials={
    client_key: 'ZsZB9g73A27tlAG9ysw93GmP4Ia9Ppwe',
  client_secret: 'SpIkuMuBWQ9V4vsw',
  initiator_name: 'your_initiator_name',
  security_credential: 'your_security_credential',
  certification_path: 'path/to/your/cert.pem',
  environment: 'sandbox' // or 'production'
}
//creating new object with daraja API credentials

const daraja= new mpesa(credentials)
//creating routes handling incoming req from the frontend e.g endpoint for a initiating payment transaction
app.post('/pay',(req,res)=>{
    const amount=req.body.amount //paid amount
    const phone=req.body.phone  //recipients phone number
})
//initiate trans..

daraja.LipaNaMpesa(amount,phone)
.then(result=>{
    console.log(result)
    res.send(result) //send trans.. back to the frontend
})
.catch(err=>{
    console.log(err)  //log the error messaeg
    res.status.send(err)  //send error back to the frontend 
})


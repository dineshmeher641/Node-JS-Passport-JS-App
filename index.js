const express=require('express')
const expressLayouts=require('express-ejs-layouts')
const ejs=require('ejs')
const app=express()
const db=require('./config/mongoose')
const bodyParser=require('body-parser')

const port=process.env.port || 5000;

app.use(expressLayouts)
app.set('view engine','ejs')


//bodyPaRSER
app.use(bodyParser.json())
app.use(express.urlencoded())

app.use('/',require('./routes'))


app.listen(port,()=>{
    console.log(`app running on port ${port} `)
})
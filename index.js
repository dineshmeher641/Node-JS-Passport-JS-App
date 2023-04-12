const express=require('express')
const expressLayouts=require('express-ejs-layouts')
const ejs=require('ejs')
const app=express()



const port=process.env.port || 5000;

app.use(expressLayouts)
app.set('view engine','ejs')
app.use('/',require('./routes/index'))


app.listen(port,()=>{
    console.log(`app running on port ${port} `)
})
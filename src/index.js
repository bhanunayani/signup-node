const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()
const publicpath = path.join(__dirname,'../public')
const viewspath = path.join(__dirname,'../template/views')
const partialspath = path.join(__dirname,'../template/partials')

app.use(express.static(publicpath))

app.set('view engine','hbs')
app.set('views',viewspath)
hbs.registerPartials(partialspath)

app.get('',(req,res)=>{
    res.render('signup',{
    title : 'Welcome',
    name : 'Bhanu prasad'
    })
})

app.get('/login',(req,res)=>{
    res.render('login',{
    title : 'WELCOME',
    name : 'Bhanu prasad'
    })
})

app.get('/signup',(req,res)=>{
    res.render('signup',{
    title : 'WELCOME',
    name : 'Bhanu prasad'    
    })
}) 


app.get('*',(req,res)=>{
    res.send('page you are looking is not found!!!')
})

app.listen(8080,()=>{
    console.log('server is on 8080')
})
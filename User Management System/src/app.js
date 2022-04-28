const express = require('express')
const path = require('path')
const hbs = require('hbs');
const User = require('./models/user');
const async = require('hbs/lib/async');
const app = express();

const publicDirectoryPath = path.join(__dirname,'../public')

const userRouter = require('./routers/users')

app.use(express.static(publicDirectoryPath))

app.set('view engine','hbs')

app.use(express.json())
app.use(userRouter);



app.get('',(req,res)=>{
    const query = req.query.name || 'World'
    res.send(
        `<h1>Hello ${query}</h1>`
    )
})

app.get('/index',(req,res)=>{
    res.render('index',{
        name:'Karan'
    })
})


// app.get('/:id',(req,res)=>{
//     const id = req.params.id;
//     res.send(
//         `<p>This was the id send : ${id}</p>`
//     ) 
// })



app.listen('3000',()=>{
    console.log('Server has been hosted at port http://localhost:3000')
})
const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config();
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT
const dbURL = process.env.dbURL


mongoose.connect(dbURL)
.then(() => {
    console.log('db connected successfully')
})
.catch((err) => {
   console.log(err)
})

const Task = require('./model/task');
const taskRoutes = require('./router/tasks');

app.use('/tasks', taskRoutes);


app.get('/', (req, res)=>{
    res.redirect('/tasks')
})



app.get('/add-task', (req, res) => {
    res.render('new', { title: 'To-do' } )  
})
app.listen(port, () =>{
    console.log('server running on port 2000')
})
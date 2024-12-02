const express = require('express')
const router = express.Router()

const Task = require('../model/task')


router.post('/', (req, res) => {
    const task = new Task(req.body) //getting the new task from frontend
    task.save() //saving the new to db
    .then((result) => {
        res.redirect('/tasks') //redirecting after submiting the form
    })
    .catch((err) => {
        console.log(err)
    })
})

router.get('/', (req, res) => {
    Task.find() // Fetch existing tasks from the database
    .then((tasks) => {
        res.render('index', { title: 'Home', tasks } );
    })
    .catch((err) => {
        console.error('Error fetching tasks:', err);
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id
    Task.findById(id)
    .then((result) => {
        res.render('details', { title: 'task-details', task: result})
    })
    .catch((err)=> { 
        console.log(err)
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    Task.findByIdAndDelete(id)
    .then(() => {
        res.status(204).send(); // No content
    })
    .catch((err) => {
        console.error('Error deleting task:', err);
        res.status(500).send('Error deleting task');
    });
})

module.exports = router;


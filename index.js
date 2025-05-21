const express = require('express');

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
    const task = {
        id: Date.now(),
        text: req.body.text,
        done: false
    }
    res.status(201).send(task);
})

app.get('/', (req, res) => {
    const task = [
        {
            id: Date.now(),
            text: 'Hello task todo list',
            done: false
        },
    ]
    res.status(200).send(task);
})


app.put('/:id', (req, res) => {
    const task = {
        id: req.params.id,
        text: req.body.text,
        done: req.body.done
    }
    res.status(200).send(task);
})


app.delete('/:id', (req, res) => {
    res.sendStatus(205)
})


app.listen(8000)
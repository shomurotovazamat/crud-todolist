const express = require('express');
const db = require('./db');

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
    const task = db.create(req.body);
    res.status(201).send(task);
})

app.get('/', (req, res) => {
    const task = db.read();
    res.status(200).send(task);
})


app.put('/:id', (req, res) => {
    const task = db.update(req.params.id, req.body);
    if (task === null) {
        res.status(404).send('Not Found');
    }
    res.status(200).send(task);
})


app.delete('/:id', (req, res) => {
    db.deleteOne(req.params.id);
    res.sendStatus(205)
})


app.listen(8000)
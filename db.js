const tasks = [];

exports.create = (body) => {
    const task = {
        id: Date.now(),
        text: body.text,
        done: false
    }
    tasks.push(task);
}

exports.read = () => {
    return tasks;
}

exports.update = (id, body) => {
    const task = tasks.find((task) => task.id === id);
    if (task) {
        task.text = body.text;
        task.done = body.done;
        return task;
    } else {
        return null;
    }
}

exports.deleteOne = (id) => {
    const index = tasks.find((task) => task.id === id);
    if (index >= 0) {
        tasks.splice(index, 1);
    }
}
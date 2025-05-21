let idCounter = 1;
const tasks = [];

exports.create = (body) => {
    const task = {
        id: idCounter,
        text: body.text,
        done: false
    }
    idCounter++;
    tasks.push(task);
    return tasks;
}

exports.read = () => {
    return tasks;
}

exports.update = (id, body) => {
    const task = tasks.find((one) => one.id === id);
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
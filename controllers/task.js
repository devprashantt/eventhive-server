import Task from '../models/task.js';
import User from '../models/user.js';

export async function getToDo(req, res) {
    const userId = req.id;
    const todo = await Task.find({ user: userId });
    res.send(todo);
}


export async function saveToDo(req, res) {
    const { text } = req.body;
    const userId = req.id;

    const task = new Task({
        text,
        user: userId
    });

    await task.save();

    await User.findByIdAndUpdate(userId, {
        $push: {
            tasks: task._id,
        },
    });

    return res.status(200).json({ message: "Task created", id: userId });
}

export async function deleteToDo(req, res) {
    const { _id } = req.body;

    console.log('id', _id);

    Task
        .findByIdAndDelete(_id)
        .then(() => res.set(201).send("Deleted Successfully..."))
        .catch((err) => console.log(err));
}

export async function updateToDo(req, res) {
    const { _id, text } = req.body;

    Task
        .findByIdAndUpdate(_id, { text })
        .then(() => res.set(201).send("Updated Successfully..."))
        .catch((err) => console.log(err));
}

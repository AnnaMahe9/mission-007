const TaskModel = require('../models/Task');

module.exports.getTasks = async (req, res) => {
    const tasks = await TaskModel.find();
    res.status(200).json(tasks)
};

module.exports.setTask = async (req, res) => {
    if (!req.body.title) {
        res.status(400).json({ message: "Informations manquantes" });
    }

    const task = await TaskModel.create({
        title: req.body.title,
        toCompleteBy: req.body.toCompleteBy
    })

    res.status(200).json(task);
}

module.exports.editTask = async (req, res) => {
    const task = await TaskModel.findById(req.params.id)
    if (!task) {
        res.status(400).json({ message: "Cette tâche n'existe pas" })
    }
    
    const updateTask = await TaskModel.findByIdAndUpdate(task, req.body,{new:true});

    res.status(200).json(updateTask)
}

module.exports.deleteTask = async (req, res) => {
    const task = await TaskModel.findById(req.params.id);
    if (!task) {
        res.status(400).json({ message: "Cette tâche n'existe pas" });
    }

    await task.deleteOne();
    res.status(200).json({ message: "Tâche supprimée"});

}
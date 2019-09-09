import model from '../models';

const { Task } = model;

class Tasks {
    static create(req, res) {
        return Task
             .create(req.body)
            .then(task => res.status(201).send({
                message: `Your task with the title ${req.body.title} has been created successfully `,
                task
            }))
    }
}

export default Tasks
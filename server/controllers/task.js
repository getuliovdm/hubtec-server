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
    static listAll( req, res){
        return Task
        .findAll({
            where: {userId : req.params.userId}
        })
        .then(tasks => res.status(201).send(tasks))
    }
}

export default Tasks
import model from '../models';
const moment = require('moment');
const { Task } = model;

class Tasks {
    static create(req, res) {

        let {title,description,userId,deleted } = req.body
        let finalDate =  moment(req.body.finalDate, 'YYYY-MM-DD');

        return Task
             .create({title,description,finalDate,userId,deleted })
            .then(task => res.status(201).send({
                message: `Your task with the title ${req.body.title} has been created successfully `,
                task
            }))
    }
    static findOne( req, res){
        return Task
        .findOne({
            where: {id : req.params.taskId}
        })
        .then(task => res.status(201).send(task))
    }
    static listAll( req, res){
        return Task
        .findAll({
            where: {userId : req.params.userId}
        })
        .then(tasks => res.status(201).send(tasks))
    }
    static updateTask(req, res) {
        let finalDate =  moment(req.body.finalDate, 'YYYY-MM-DD');
         return Task
             .findOne({
                 where: { id: req.params.taskId }
             })
             .then(task => {
                 task.update({
                     title: req.body.title || task.title,
                     deleted: req.body.deleted || task.deleted,
                     userId : req.body.userId || task.userId,
                     finalDate : finalDate || task.finalDate,
                     description: req.body.description || task.description,
                 }).then( updateTask => {
                     console.log(JSON.stringify(updateTask));
                     res.status(200).send({
                         message: 'Task updated successfully',
                         data: updateTask
                     })
                 }).catch(error => res.status(400).send(error));
             }).catch(error => res.status(400).send(error));
     }
    static deleteTask ( req, res ) {
         
        return Task
            .findOne({
                where: { id: req.params.taskId }
            })
            .then(task => {
                
                if (!task) {
                    return res.status(400).send({
                        message: 'Task Not Found',
                    });
                }
                return task
                    .update({
                        title: task.title,
                        deleted: true,
                        userId : task.userId ,
                        finalDate : task.finalDate,
                        description: task.description 
                    })
                    .then(() => res.status(200).send(task))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error))
    }
}

export default Tasks
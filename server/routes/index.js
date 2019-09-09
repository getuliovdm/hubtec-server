import Users from '../controllers/user';
import Tasks from '../controllers/task';
export default (app) => {
    const Router = '/api';
    app.get(`${Router}`, (req, res) => res.status(200).send({
        message: 'Welcome to the Hubtec-Gerenciador de Tarefas API!',
    }));
    //USUARIO
    const User = `${Router}/users`;
    app.post(`${User}/register`, Users.register);  // API EndPoint do Cadastro
    //TAREFAS
    const Task = `${User}/tasks`;
    app.post(`${Task}`, Tasks.create);             // API EndPoint do Cadastro de Tarefa C
    app.get(`${Task}/:userId`, Tasks.listAll);     // API EndPoint de Listar Tarefas     R
    app.put(`${Task}/:taskId`, Tasks.updateTask);  // API EndPoint de atualizar a Tarefa.U
    app.delete(`${Task}/:taskId`, Task.deleteTask);// API EndPoint de deletar a Tarefa.  D
};
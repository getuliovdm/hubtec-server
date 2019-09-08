import Users from '../controllers/user';
export default (app) => {
    const Router = '/api';
    app.get(`${Router}`, (req, res) => res.status(200).send({
        message: 'Welcome to the TodoList API!',
    }));

    const User = `${Router}/users/`;
    app.post(`${User}/register`, Users.register); // API EndPoint do Cadastro

};
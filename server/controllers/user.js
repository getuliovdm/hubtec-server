import models from '../models';

const { User } = models;

class Users {
    static register(req, res) {
        const { userName, email, password } = req.body;
        console.log(req.body);
        return User.create({ userName, email, password }).then(userData => res.status(201).send({
                success: true,
                message: 'User successfully created',
                userData
            }))
    }
}

export default Users;
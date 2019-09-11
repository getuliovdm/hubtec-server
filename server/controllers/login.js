import models from '../models';
const { User } = models;
import jwt from 'jsonwebtoken';
class Login {
    static SingIn(req, res) {
        try {
            const _data = req.body;
            User.findOne({
                where: {
                    email: _data.email
                }
            }).then(response => {
                if (!response) {
                    res.status(422).send({
                        message: 'EmailNotFound'
                    });
                    return;
                }
                if (!response.validPassword(_data.password)) {
                    res.status(412).send({
                        message: 'InvalidPassword'
                    });
                    return;
                }
                console.log(JSON.stringify(response));
                 const token = jwt.sign({id: response.id}, "@hubtec-tasks-Token" )
                 res.status(201).send({
                    message: 'Successfull Login',
                    token: token
                });
                // req.session.Professional = response;
                // res.send(response);
            });
        } catch (error) {
            res.status(500).send({
                mensage: 'InternalError',
                details: error
            });
        }
    }
}

export default Login;
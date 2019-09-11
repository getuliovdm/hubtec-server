import jwt from 'jsonwebtoken';
import models from '../models';
const { User } = models;
export default {
    authentication : async (req,res,next) =>{
    const authHeader = req.headers.authorization;
      if (!authHeader){
        return res.status(401).send({
            message: 'Non Authorized User!'
        });
      }
      const [,token] = authHeader.split(" ");
      try {
        const decoded = jwt.verify(token,"@hubtec-tasks-Token");
        const user  = await User.findOne({where : {id : decoded.id }});
        if(!user){
           return  res.send(401).send({
                message: 'User Not Found!'
            })
        }
        return next();
      } catch (error) {
          return res.status(401).send({
              message: "Invalid Token"
          })
      }
    }
}
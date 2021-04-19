import { Entity, EntityRepository, Repository } from "typeorm";
import { User } from "../entity/user.entity";
import {Request,Response} from "express";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    //create a new user
    async createUser(req: Request, res: Response){

        const {username, useremail, userpassword} = req.body;


          try{
            let user = new User()
            user.username = username;
            user.useremail = useremail;
            user.userpassword = userpassword;

        let userData = await this.save(user);
        return res.send(userData);
          }catch(error){
              res.send(error);
          }

    }
}
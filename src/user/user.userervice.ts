import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./user.model";
@Injectable()
export class userService{
    constructor(
        @InjectModel('User') private readonly UserModel:Model<User>
    ){}
    async insertUser(name:String,password:String){
        const newUser = await this.UserModel.create({name,password})
        return newUser

    }
    async getAllUsers(){
        const users = await this.UserModel.find({}).sort({createdAt:-1})
        return  users
    }
}
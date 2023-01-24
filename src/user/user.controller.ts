import { Get,Post,Controller,Body } from "@nestjs/common";
import { userService } from "./user.userervice";
@Controller('user')
export class userController{
    constructor(private readonly userService:userService){}

    @Post()
   addUser(
        @Body() body:{name:String,password:String}

    ):any{
            try{
                const newUser = this.userService.insertUser(body.name,body.password)
                return newUser
            }catch(error){
                return {error:error.message}
            }
    }
    @Get('all')
    getAllUser(){
        try{
            const users = this.userService.getAllUsers();
            return users;
        }
        catch(error){
            return {error:error.message}
        }
    }
}
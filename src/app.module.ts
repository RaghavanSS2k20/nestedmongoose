import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { userModule } from './user/user.module';

@Module({
  imports: [userModule, MongooseModule.forRoot("mongodb+srv://raghavan20pw26:raghav0175@assignment.wbcf3qb.mongodb.net/?retryWrites=true&w=majority")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

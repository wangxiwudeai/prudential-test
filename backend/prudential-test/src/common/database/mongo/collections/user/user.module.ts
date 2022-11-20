import { Module } from "@nestjs/common";
import { MongoModule } from "src/common/database/database.module";
import { mongoProvider } from "../../mongo.provider";
import { userProviders } from "./user.provider";
import { UserService } from "./user.service";

@Module({
    imports: [MongoModule],
    providers: [UserService, ...userProviders],
    exports: [...userProviders]
})
export class UserModule {

}
import { Module } from "@nestjs/common";
import { MongoModule } from "src/common/database/database.module";
import { mongoProvider } from "../../mongo.provider";
import { articleProviders } from "./article.provider";
import { ArticleService } from "./article.service";

@Module({
    imports: [MongoModule],
    providers: [ArticleService, ...articleProviders],
    exports: [...articleProviders]
})
export class ArticleModule {

}
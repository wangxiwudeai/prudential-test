import { Module } from '@nestjs/common';
import { MongoModule } from 'src/common/database/database.module';
import { ArticleModule } from 'src/common/database/mongo/collections/article/article.module';
import { ArticleService } from 'src/common/database/mongo/collections/article/article.service';
import { UserModule } from 'src/common/database/mongo/collections/user/user.module';
import { userProviders } from 'src/common/database/mongo/collections/user/user.provider';
import { UserService } from 'src/common/database/mongo/collections/user/user.service';
import { JianController } from './controller/jian.controller';
import { JianService } from './service/jian.service';

@Module({
    imports: [ArticleModule, UserModule, MongoModule],
    controllers: [JianController],
    providers: [JianService, UserService, ArticleService]
})
export class JianModule {

}
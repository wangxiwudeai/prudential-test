import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoModule } from './common/database/database.module';
import { JianModule } from './module/jianDemo/jian.module';

@Module({
  imports: [JianModule, MongoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

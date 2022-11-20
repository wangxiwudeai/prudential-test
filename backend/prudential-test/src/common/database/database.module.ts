import { Module } from '@nestjs/common';
import { mongoProvider } from './mongo/mongo.provider';

@Module({
    providers: [...mongoProvider],
    exports: [...mongoProvider],
})
class MongoModule { }

export { MongoModule };
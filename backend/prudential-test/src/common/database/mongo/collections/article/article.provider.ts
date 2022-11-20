import { Connection } from 'mongoose';
import { articleSchema } from './article.schema';

export const articleProviders = [
    {
        provide: 'ARTICLE_MODEL',
        useFactory: (connection: Connection) => connection.model('Article', articleSchema),
        inject: ['MONGO_CONNECTION'],
    },
];
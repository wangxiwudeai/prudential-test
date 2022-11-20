import { Connection } from 'mongoose';
import { userSchema } from './user.schema';

export const userProviders = [
    {
        provide: 'USER_MODEL',
        useFactory: (connection: Connection) => connection.model('User', userSchema),
        inject: ['MONGO_CONNECTION'],
    },
];
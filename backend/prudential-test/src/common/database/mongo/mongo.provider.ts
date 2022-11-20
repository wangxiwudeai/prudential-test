import * as mongoose from 'mongoose';
import { mongoConfig } from '../../config/mongo.config';

const { database, user, password, port, host } = mongoConfig;


export const mongoProvider = [
    {
        provide: 'MONGO_CONNECTION',
        useFactory: (): Promise<typeof mongoose> => {
            console.log("link", `mongodb://${user}:${password}@${host}:${port}/${database}`);
            return mongoose.connect(`mongodb://${user}:${password}@${host}:${port}/${database}`);
        },
    },
];
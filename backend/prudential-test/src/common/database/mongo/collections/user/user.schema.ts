import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
    _id: String,
    id: String,
    name: String,
    account: String,
    like: Number,
    assets: Number,
    wordCount: Number,
}, {
    collection: "user"
});
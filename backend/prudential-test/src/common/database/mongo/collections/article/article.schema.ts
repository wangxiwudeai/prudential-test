import * as mongoose from 'mongoose';

export const articleSchema = new mongoose.Schema({
    _id: String,
    id: String,
    title: String,
    author: String,
    like: Number,
    diamond: Number,
    createOn: Date,
    wordCount: Number,
    read: Number,
    content: String,
    abstract: String,
    authorName: String,
}, {
    collection: "article"
});
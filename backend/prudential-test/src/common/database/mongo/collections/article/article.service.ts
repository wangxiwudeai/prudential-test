import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { Article } from "./article.interface";

@Injectable()
export class ArticleService {
    @Inject("ARTICLE_MODEL")
    private articleModel: Model<Article>;

    /**
     * 根据文章 id 找到
     * @param id 文章 id
     * @returns Article
     */
    async getArticleById(id: string): Promise<Article> {
        return await this.articleModel.findOne({ id: id }).exec();
    }

    /**
    * 根据 id 后缀查询一批文章, 模拟随机推荐
    * @param suffix 后缀
    * @param limit 数量
    * @returns Article[]
    */
    async getArticleByIdSuffix(suffix: string, limit: number): Promise<Article[]> {
        const regString = new RegExp(`${suffix}$`);
        return await this.articleModel.find({ id: regString }).limit(limit).exec();
    }

    /**
     * 查询用户的文章列表
     * @param userId 用户id
     * @param limit 数量
     * @returns 
     */
    async getUserArticles(userId: string, limit: number): Promise<Article[]> {
        return await this.articleModel.find({ author: userId }).limit(limit).exec();
    }

}
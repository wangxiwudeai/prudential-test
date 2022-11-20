import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { Article } from "src/common/database/mongo/collections/article/article.interface";
import { ArticleService } from "src/common/database/mongo/collections/article/article.service";
import { User } from "src/common/database/mongo/collections/user/user.interface";
import { UserService } from "src/common/database/mongo/collections/user/user.service";
import { ArticleDetailResponseData } from "../jian.interface";

@Injectable()
export class JianService {
    @Inject()
    private readonly userService: UserService;
    @Inject()
    private readonly articleService: ArticleService;

    /**
     * 获取推荐的用户列表
     * @param idPrefix id 前缀
     * @param limit 数量
     * @returns 
     */
    public getRecommendUserList(idPrefix: string, limit: number) {
        return this.userService.getUserByIdSuffix(idPrefix, limit);
    }

    /**
     * 获取文章详情
     * @param articleId 文章 id
     * @returns 
     */
    public async getArticleDetail(articleId: string): Promise<ArticleDetailResponseData> {
        // 查询文章信息
        let articleInfo: Article;
        let authorId = "";
        try {
            articleInfo = await this.articleService.getArticleById(articleId);
            authorId = articleInfo.author;
        } catch (err) {
            throw Error("Article not Found");
        }

        // 查询文章作者信息
        let authorInfo: User;
        try {
            authorInfo = await this.userService.getUSerById(authorId);
        } catch (err) {
            throw Error("Author not Found");
        }
        const res: ArticleDetailResponseData = {
            articleInfo,
            authorInfo
        };
        return res;
    }

    /**
     * 获取指定用户下的文章列表
     * @param userId 用户id
     * @param limit 数量
     */
    public async getUserArticles(userId: string, limit: number): Promise<Article[]> {
        return await this.articleService.getUserArticles(userId, limit);
    }

    /**
     * 获取推荐的文章列表
     * @param idSuffix id 后缀
     * @param limit 数量
     * @returns 
     */
    public async getRecommendArticleList(idSuffix: string, limit: number) {
        return await this.articleService.getArticleByIdSuffix(idSuffix, limit);
    }
}
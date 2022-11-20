import { Controller, Get, Inject, Query, UseFilters, UseInterceptors } from "@nestjs/common";
import { Article } from "src/common/database/mongo/collections/article/article.interface";
import { User } from "src/common/database/mongo/collections/user/user.interface";
import { ErrorFilter } from "../filter/error.filter";
import { SuccessFilter } from "../filter/success.filter";
import { ArticleDetailResponseData, StandardIdQuery, StandardRandomQuery, StandardResponse, UserArticleQuery } from "../jian.interface";
import { JianService } from "../service/jian.service";

@Controller("jian-demo")
export class JianController {
    @Inject()
    private readonly jianService: JianService;

    /**
     * 获取推荐用户列表
     * @param query 
     * @returns 
     */
    @Get("recommend-user")
    @UseFilters(new ErrorFilter())
    @UseInterceptors(new SuccessFilter())
    async getRecommendUserList(@Query() query: StandardRandomQuery): Promise<User[]> {
        return await this.jianService.getRecommendUserList(query.random, query.limit);
    }

    /**
     * 获取文章详情
     * @param query 
     * @returns 
     */
    @Get("article-detail")
    @UseFilters(new ErrorFilter())
    @UseInterceptors(new SuccessFilter())
    async getArticleDetail(@Query() query: StandardIdQuery): Promise<ArticleDetailResponseData> {
        return await this.jianService.getArticleDetail(query.id);
    }

    /**
     * 获取推荐文章列表
     * @param query 
     * @returns 
     */
    @Get("recommend-article")
    @UseFilters(new ErrorFilter())
    @UseInterceptors(new SuccessFilter())
    async getRecommendArticle(@Query() query: StandardRandomQuery): Promise<Article[]> {
        return await this.jianService.getRecommendArticleList(query.random, query.limit);
    }

    /**
     * 获取用户文章列表
     * @param query 
     * @returns 
     */
    @Get("user-article")
    @UseFilters(new ErrorFilter())
    @UseInterceptors(new SuccessFilter())
    async getUserArticle(@Query() query: UserArticleQuery): Promise<Article[]> {
        return await this.jianService.getUserArticles(query.id, query.limit);
    }
}
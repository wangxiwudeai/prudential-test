import { Article } from "@/interface/article.interface";
import { User } from "@/interface/user.interface";

export type HelloResponseBody = Array<HelloResponseBodyItem>

export interface StandardResponse<T> {
    code: number;
    data: T;
    message: string;
}

export interface HelloResponseBodyItem {
    account: string;
    name: string;
}

export interface getRecommendArticleListQuery {
    random: string;
    limit: number;
}

export interface getRecommendUserListQuery {
    random: string;
    limit: number;
}

/* 获取文章详情 */
export interface GetArticleDetailQuery {
    /**
     * 文章 id
     */
    id: string;
}

export interface GetArticleDetailResponseData {
    articleInfo: Article;
    authorInfo: User;
}

/* 获取用户文章 */
export interface GetUserArticleQuery {
    /**
     * 用户 id
     */
    id: string;
    /**
     * 数量
     */
    limit: number;
}

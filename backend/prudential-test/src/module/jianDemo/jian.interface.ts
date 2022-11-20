import { Article } from "src/common/database/mongo/collections/article/article.interface";
import { User } from "src/common/database/mongo/collections/user/user.interface";

export class StandardResponse<T> {
    code: number = 0;
    data: T;
    message: string = "";
}

export interface StandardRandomQuery {
    random: string;
    limit: number;
}

export interface StandardIdQuery {
    id: string;
}

export interface UserArticleQuery extends StandardIdQuery {
    limit: number;
}

export interface ArticleDetailResponseData {
    articleInfo: Article;
    authorInfo: User;
}


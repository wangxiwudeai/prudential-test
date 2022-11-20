import { getUserArticleList } from "@/ajax";
import { Article } from "@/interface/article.interface";
import { User } from "@/interface/user.interface";
import { Link } from "dva/router";
import React, { useEffect, useState } from "react";
import AuthorInfo from "../authorInfo";
import Recommend from "../recommend/recommend";
import "./index.less";

interface Props {
    authorInfo: User;
}

const AuthorArticle: React.FC<Props> = (props: Props) => {
    const { authorInfo } = props;

    const [list, setList] = useState<Article[]>([]);

    useEffect(() => {
        getUserArticle();
    }, [authorInfo.id]);


    const getUserArticle = async () => {
        const articleList = await getUserArticleList({
            id: authorInfo.id,
            limit: 5
        });
        setList(articleList);
    }

    return (
        <div className="author-article">
            {/* author info */}
            <AuthorInfo authAttr={["assets"]} authorInfo={authorInfo} articleInfo={new Article()}></AuthorInfo>
            {/* article list */}
            <Recommend articleList={list}></Recommend>
        </div>
    );
}

export default AuthorArticle;

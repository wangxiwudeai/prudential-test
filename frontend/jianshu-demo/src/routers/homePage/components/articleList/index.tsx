import { getRecommendArticleList } from "@/ajax";
import { Article } from "@/interface/article.interface";
import { randomSuffix } from "@/utils/randomSuffix";
import React, { useEffect, useState } from "react";
import ArticleItem from "./articleItem";
import "./index.less";

const ArticleList: React.FC = () => {
    const [list, setList] = useState<Article[]>([]);
    useEffect(() => {
        getList();
    }, []);

    const getList = async () => {
        const random = randomSuffix();
        const res = await getRecommendArticleList({
            random,
            limit: 10
        });
        setList(res);
    }

    console.log(list);
    return (
        <div className="article-list">
            {list.map(item => <ArticleItem articleInfo={item}></ArticleItem>)}
        </div>
    );
}


export default ArticleList;
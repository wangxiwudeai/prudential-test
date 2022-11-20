import { getArticleDetail, getRecommendArticleList } from "@/ajax";
import PageHeader from "@/components/pageHeader";
import { Article } from "@/interface/article.interface";
import { User } from "@/interface/user.interface";
import { RouteComponentProps } from "dva/router";
import React, { useEffect, useState } from "react";
import AuthorArticle from "./components/authorArticle";
import AuthorInfo from "./components/authorInfo";
import FixedOperation from "./components/fixedOperation";
import Recommend from "./components/recommend";
import URL from "url";
import "./index.less";
import { randomSuffix } from "@/utils/randomSuffix";

interface Props extends RouteComponentProps {

}

const DetailPage: React.FC<Props> = (props: Props) => {
    const [articleInfo, setArticleInfo] = useState<Article>(new Article());
    const [authorInfo, setAuthorInfo] = useState<User>(new User());
    const [recommendList, setRecommendList] = useState<Article[]>([]);

    useEffect(() => {
        getData();
        getRecommendList();
    }, [getSearchId()]);

    /**
     * 获取url中的id参数
     */
    function getSearchId(): string {
        const url = URL.parse(props.location.search, true);
        return url.query.id as string;
    }

    /**
     * 获取详情
     */
    const getData = async (): Promise<void> => {
        const data = await getArticleDetail({ id: getSearchId() });
        setArticleInfo(data.articleInfo);
        setAuthorInfo(data.authorInfo);
    }

    /**
     * 获取推荐文章列表
     */
    const getRecommendList = async (): Promise<void> => {
        const random = randomSuffix();
        const list = await getRecommendArticleList({
            random,
            limit: 5
        });
        setRecommendList(list);
    }




    return (
        <div className="detail-page">
            {/* page header */}
            <PageHeader></PageHeader>
            {/* page body */}
            <div className="detail-page-body">
                <div className="left-col">
                    {/* title */}
                    <div className="article-title">{articleInfo.title}</div>
                    {/* author info */}
                    <AuthorInfo authAttr={["diamond", "date", "read", "word-count"]} authorInfo={authorInfo} articleInfo={articleInfo}></AuthorInfo>
                    {/* article content */}
                    <div className="content">{articleInfo.content}</div>
                </div>
                <div className="right-col">
                    {/* author articles */}
                    <AuthorArticle authorInfo={authorInfo}></AuthorArticle>
                    {/* recommended reading */}
                    <Recommend articleList={recommendList}></Recommend>
                </div>
            </div>
            {/* fixed operation */}
            <FixedOperation></FixedOperation>
        </div>
    )
}

export default DetailPage;
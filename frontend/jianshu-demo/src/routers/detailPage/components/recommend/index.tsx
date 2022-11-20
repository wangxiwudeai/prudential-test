import { Article } from "@/interface/article.interface";
import { Link } from "dva/router";
import React from "react";
import AuthorInfo from "../authorInfo";
import Recommend from "./recommend";
import "./index.less";

interface Props {
    articleList: Article[];
}

const RecommendList: React.FC<Props> = (props) => {
    const { articleList } = props;

    return (
        <div className="recommend-list">
            <div className="title">推荐阅读</div>
            <Recommend articleList={articleList}></Recommend>
        </div>
    );
}

export default RecommendList;

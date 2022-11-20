import { Article } from "@/interface/article.interface";
import { Link } from "dva/router";
import React from "react";
import AuthorInfo from "../authorInfo";
import "./recommend.less";

interface Props {
    articleList: Article[];
}

const Recommend: React.FC<Props> = (props) => {
    const { articleList } = props;

    return (
        <div className="recommend-article">
            {articleList.map(item => {
                return (
                    <div className="article-item" key={item.id}>
                        <Link to={`/detail?id=${item.id}`}>
                            <div className="title">{item.title}</div>
                        </Link>
                        <div className="read">阅读 {item.read}</div>
                    </div>
                )
            })}
        </div>
    );
}

export default Recommend;

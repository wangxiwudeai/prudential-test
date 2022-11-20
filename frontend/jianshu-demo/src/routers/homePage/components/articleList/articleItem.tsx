import { Article } from "@/interface/article.interface";
import { HeartFilled, SketchOutlined } from "@ant-design/icons";
import { Link } from "dva/router";
import React from "react";

interface Props {
    articleInfo: Article;
}

const ArticleItem: React.FC<Props> = (props: Props) => {
    const { articleInfo } = props;

    return (
        <div className="article-item">
            <div className="content">
                {/* title */}
                <Link to={`/detail?id=${articleInfo.id}`}>
                    <div className="title">{articleInfo.title}</div>
                </Link>
                {/* abstract */}
                <div className="abstract">
                    {articleInfo.abstract}

                </div>
                {/* extra infos */}
                <div className="extra-infos">
                    <div className="diamond">
                        <SketchOutlined className="icon" />{articleInfo.diamond}
                    </div>
                    <div className="author-name">
                        {articleInfo.authorName}
                    </div>
                    <div className="like">
                        <HeartFilled className="icon" />{articleInfo.like}
                    </div>
                </div>
            </div>
            <div className="img"></div>
        </div>
    );
}

export default ArticleItem;
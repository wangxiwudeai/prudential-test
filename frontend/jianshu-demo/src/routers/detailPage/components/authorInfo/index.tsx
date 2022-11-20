import { Article } from "@/interface/article.interface";
import { User } from "@/interface/user.interface";
import { SketchOutlined } from "@ant-design/icons";
import { Button, ConfigProvider } from "antd";
import moment from "moment";
import React from "react";
import "./index.less";

type AuthAttr = "diamond" | "date" | "word-count" | "read" | "assets";

interface Props {
    authAttr: Array<AuthAttr>
    authorInfo: User;
    articleInfo: Article;
}

const AuthorInfo: React.FC<Props> = (props) => {
    const { authorInfo, articleInfo } = props;
    const attrSet = new Set(props.authAttr);

    /**
     * render detail by props.authAttr
     */
    const renderDetail = () => {
        const res = [];
        // 不循环保障顺序
        if (attrSet.has("diamond")) {
            res.push(
                <div className="diamond"><SketchOutlined />{articleInfo.diamond}</div>
            )
        }
        if (attrSet.has("date")) {
            res.push(
                <div className="date">{moment(articleInfo.createOn).format("YYYY.MM.DD h:mm:ss")}</div>
            )
        }
        if (attrSet.has("word-count")) {
            res.push(
                <div className="word-count">字数 {articleInfo.wordCount}</div>
            )
        }
        if (attrSet.has("read")) {
            res.push(
                <div className="read">阅读 {articleInfo.read}</div>
            )
        }
        if (attrSet.has("assets")) {
            res.push(
                <div className="assets">总资产 {authorInfo.assets}</div>
            )
        }

        return res;
    }

    return (
        <div className="author-info">
            <div className="img">{authorInfo.name[0]}</div>
            <div className="info">
                <div className="name-row">
                    <div className="name">{authorInfo.name}</div>
                    <div className="follow">
                        <ConfigProvider autoInsertSpaceInButton={false}>
                            <Button className="follow-btn">关注</Button>
                        </ConfigProvider>
                    </div>
                </div>
                <div className="detail-row">
                    {renderDetail()}
                </div>
            </div>
        </div>
    );
}

AuthorInfo.defaultProps = {
    authorInfo: new User(),
    articleInfo: new Article()
}



export default AuthorInfo;
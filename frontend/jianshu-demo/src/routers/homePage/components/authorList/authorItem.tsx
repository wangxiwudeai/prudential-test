import { User } from "@/interface/user.interface";
import { Button, ConfigProvider } from "antd";
import React from "react";


interface Props {
    authorInfo: User;
}
const AuthorItem: React.FC<Props> = (props) => {
    const { authorInfo } = props;

    return (
        <div className="author-item">
            <div className="left">
                <div className="img">{authorInfo.name[0]}</div>
                <div>
                    <div className="name">{authorInfo.name}</div>
                    <div className="info">写了{authorInfo.wordCount}字 · {authorInfo.like}喜欢</div>
                </div>
            </div>
            <div className="follow">
                <ConfigProvider autoInsertSpaceInButton={false}>
                    <Button>+关注</Button>
                </ConfigProvider>
            </div>
        </div>
    );
}

export default AuthorItem;
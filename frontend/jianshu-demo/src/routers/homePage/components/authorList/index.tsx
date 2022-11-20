import { getRecommendUserList } from "@/ajax";
import { User } from "@/interface/user.interface";
import { randomSuffix } from "@/utils/randomSuffix";
import { SyncOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import AuthorItem from "./authorItem";
import "./index.less";

const AuthorList: React.FC = () => {
    const [list, setList] = useState<User[]>([]);
    useEffect(() => {
        getList();
    }, []);

    const getList = async () => {
        const random = randomSuffix();
        const res = await getRecommendUserList({
            random,
            limit: 10
        });
        setList(res);
    }

    return (
        <div className="author-list">
            <div className="header">
                <div className="title">推荐作者</div>
                <div className="change" onClick={() => getList()}><SyncOutlined /> 换一批</div>
            </div>
            <div className="list">
                {list.map(item => <AuthorItem authorInfo={item}></AuthorItem>)}
            </div>
        </div>
    );
}


export default AuthorList;
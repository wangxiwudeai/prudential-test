import { ChromeOutlined } from "@ant-design/icons";
import { Button, Input, ConfigProvider } from "antd";
import { Link } from "dva/router";
import React from "react";
import "./index.less";
import { headerNav } from "./nav";

const PageHeader: React.FC = () => {
    return (
        <div className="page-header">
            <div className="container">
                {/* logo */}
                <div className="header-logo">简 Demo</div>
                {/* nav */}
                <div className="header-button-group">
                    <ConfigProvider autoInsertSpaceInButton={false}>
                        {
                            headerNav.map(item => {
                                return (
                                    <Link to={item.link}>
                                        <Button className="nav-button" key={item.code}>
                                            <ChromeOutlined className="nav-icon" />{item.name}
                                        </Button>
                                    </Link>
                                );
                            })
                        }
                    </ConfigProvider>
                </div>
                {/* search */}
                <div className="search-bar">
                    <Input.Search placeholder="搜索"></Input.Search>
                </div>
                {/* login & register & article*/}
                <ConfigProvider autoInsertSpaceInButton={false}>
                    <Button className="article-button float-btn">写文章</Button>
                    <Button className="register-button float-btn">注册</Button>
                    <Button className="login-button  float-btn">登录</Button>
                </ConfigProvider>
            </div>

        </div>
    )
}

export default PageHeader;
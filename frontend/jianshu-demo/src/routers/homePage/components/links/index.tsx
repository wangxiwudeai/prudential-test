import React from "react";

import { links } from "./links";
import "./index.less";

const HomePageLinks: React.FC = () => {
    return (
        <div className="home-page-links">
            {links.map(item => {
                return (
                    <div className="link-item" style={{
                        backgroundColor: item.backgroundColor,
                        color: item.fontColor
                    }}>{item.name + " >"}</div>
                );
            })}
        </div>
    );
}

export default HomePageLinks;
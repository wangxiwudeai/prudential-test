import { LikeFilled, QrcodeOutlined } from "@ant-design/icons";
import React from "react";
import "./index.less";

const FixedOperation: React.FC = () => {
    return (
        <div className="fixed-operation">
            <div className="operation-item">
                <div className="icon"><LikeFilled /></div>
                <div>115赞</div>
            </div>
            <div className="operation-item">
                <div className="icon">赏</div>
                <div>赞赏</div>
            </div>
            <div className="operation-item">
                <div className="icon"><QrcodeOutlined /></div>
                <div>更多好文</div>
            </div>
        </div>
    )
}

export default FixedOperation;
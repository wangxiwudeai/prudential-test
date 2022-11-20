import { hello } from "@/ajax";
import PageHeader from "@/components/pageHeader";
import { Button, Carousel } from "antd";
import { Link } from "dva/router";
import React, { useEffect, useState } from "react";
import ArticleList from "./components/articleList";
import AuthorList from "./components/authorList";
import HomeCarousel from "./components/homeCarousel";
import HomePageLinks from "./components/links";
import "./index.less";

const HomePage: React.FC = () => {

    return (
        <div className="home-page">
            <PageHeader></PageHeader>
            <div className="home-page-body">
                <div className="left-col">
                    {/* Carousel */}
                    <HomeCarousel></HomeCarousel>
                    {/* ArticleList */}
                    <ArticleList></ArticleList>
                </div>
                <div className="right-col">
                    {/* links */}
                    <HomePageLinks></HomePageLinks>
                    {/* AuthorList */}
                    <AuthorList></AuthorList>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
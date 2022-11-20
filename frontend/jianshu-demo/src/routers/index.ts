import React from "react";
import HomePage from "./homePage"
import DetailPage from "./detailPage";
import NotFoundPage from "./notFound";


const routes: Array<{ path: string; component: React.FC; }> = [
    {
        path: "/detail",
        component: DetailPage,
    },
    {
        path: "/home",
        component: HomePage,
    },
    {
        path: "/404",
        component: NotFoundPage
    },
    {
        path: "/",
        component: HomePage,
    },
];
export default routes;

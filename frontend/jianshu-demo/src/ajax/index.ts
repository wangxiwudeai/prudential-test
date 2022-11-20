import { Article } from '@/interface/article.interface';
import { User } from '@/interface/user.interface';
import axios, { AxiosAdapter, AxiosRequestConfig, AxiosResponse } from 'axios';
import { GetArticleDetailQuery, GetArticleDetailResponseData, getRecommendArticleListQuery, getRecommendUserListQuery, GetUserArticleQuery, StandardResponse } from './interface';

//Todo: 移动到 docker-compose 环境变量配置
const backendUrl = "localhost:13002";


/**
 * 获取推荐文章列表
 * @param query 
 * @returns 
 */
export const getRecommendArticleList = async (
    query: getRecommendArticleListQuery
): Promise<Article[]> => {
    const res: AxiosResponse<StandardResponse<Article[]>> = (await axios({
        method: 'get',
        url: `http://${backendUrl}/jian-demo/recommend-article`,
        params: query
    }));
    if (res.data.code === 0) {
        return res.data.data;
    } else {
        return [];
    }
}


/**
 * 获取推荐用户列表
 * @param query 
 * @returns 
 */
export const getRecommendUserList = async (
    query: getRecommendUserListQuery
): Promise<User[]> => {

    const res: AxiosResponse<StandardResponse<User[]>> = (await axios({
        method: 'get',
        url: `http://${backendUrl}/jian-demo/recommend-user`,
        params: query
    }));
    if (res.data.code === 0) {
        return res.data.data;
    } else {
        return [];
    }
}


/**
 * 获取推荐用户列表
 * @param query 
 * @returns 
 */
export const getArticleDetail = async (
    query: GetArticleDetailQuery
): Promise<GetArticleDetailResponseData> => {

    const res: AxiosResponse<StandardResponse<GetArticleDetailResponseData>> = (await axios({
        method: 'get',
        url: `http://${backendUrl}/jian-demo/article-detail`,
        params: query
    }));
    if (res.data.code === 0) {
        return res.data.data;
    } else {
        return {
            authorInfo: new User(),
            articleInfo: new Article()
        };
    }
}

/**
 * 获取用户文章列表
 * @param query 
 * @returns 
 */
 export const getUserArticleList = async (
    query: GetUserArticleQuery
): Promise<Article[]> => {

    const res: AxiosResponse<StandardResponse<Article[]>> = (await axios({
        method: 'get',
        url: `http://${backendUrl}/jian-demo/user-article`,
        params: query
    }));
    if (res.data.code === 0) {
        return res.data.data;
    } else {
        return [];
    }
}



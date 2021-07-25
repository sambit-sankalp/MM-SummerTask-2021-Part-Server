import { TRENDING_ARTICLE_LIST_FAIL, TRENDING_ARTICLE_LIST_REQUEST, TRENDING_ARTICLE_LIST_SUCCESS,  LATEST_ARTICLE_LIST_FAIL, LATEST_ARTICLE_LIST_REQUEST, LATEST_ARTICLE_LIST_SUCCESS, ARTICLE_LIST_REQUEST, ARTICLE_LIST_SUCCESS, ARTICLE_LIST_FAIL, ARTICLE_DETAILS_REQUEST, ARTICLE_DETAILS_SUCCESS, ARTICLE_DETAILS_FAIL, ARTICLE_DELETE_REQUEST, ARTICLE_DELETE_SUCCESS, ARTICLE_DELETE_FAIL, ARTICLE_UPDATE_REQUEST, ARTICLE_UPDATE_SUCCESS, ARTICLE_UPDATE_FAIL, ARTICLE_CREATE_COMMENT_REQUEST, ARTICLE_CREATE_COMMENT_SUCCESS, ARTICLE_CREATE_COMMENT_FAIL } from '../constants/articleConstants'
import axios from 'axios'

const listArticles = (keyword= '') => async (dispatch) =>{
    try {
        dispatch({type: ARTICLE_LIST_REQUEST})

        const { data } = await axios.get(`/api/article/all?keyword=${keyword}`)

        dispatch({
            type: ARTICLE_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ARTICLE_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

const listArticleDetails = (id) => async (dispatch) =>{
    try {
        dispatch({type: ARTICLE_DETAILS_REQUEST})

        const { data } = await axios.get(`/api/article/${id}`)

        dispatch({
            type: ARTICLE_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ARTICLE_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

const listTrendingArticles = () => async (dispatch) =>{
    try {
        dispatch({type: TRENDING_ARTICLE_LIST_REQUEST})

        const { data } = await axios.get('/api/article/trending')

        dispatch({
            type: TRENDING_ARTICLE_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: TRENDING_ARTICLE_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

const listLatestArticles = () => async (dispatch) =>{
    try {
        dispatch({type: LATEST_ARTICLE_LIST_REQUEST})

        const { data } = await axios.get('/api/article/latest')

        dispatch({
            type: LATEST_ARTICLE_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LATEST_ARTICLE_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

const deleteArticle = (id) => async (dispatch,getState) =>{
    try {
        dispatch({type: ARTICLE_DELETE_REQUEST})

        const { userLogin: {userInfo}} =getState()

        const config = {
            headers: {
                Authorization : `Bearer ${userInfo.token}`
            }
        }

        await axios.delete(`/api/article/${id}`, config)

        dispatch({
            type: ARTICLE_DELETE_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type: ARTICLE_DELETE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

const createAArticle = () => async (dispatch,getState) =>{
    try {
        dispatch({type: ARTICLE_CREATE_REQUEST})

        const { userLogin: {userInfo}} =getState()

        const config = {
            headers: {
                Authorization : `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(`/api/article/${id}`, {} , config)

        dispatch({
            type: ARTICLE_CREATE_SUCCESS,
            payload : data
        })
    } catch (error) {
        dispatch({
            type: ARTICLE_CREATE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

const updateArticle = (article) => async (dispatch,getState) =>{
    try {
        dispatch({type: ARTICLE_UPDATE_REQUEST})

        const { userLogin: {userInfo}} =getState()

        const config = {
            headers: {
                'content-type': 'application/json',
                Authorization : `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put(`/api/article/${article._id}`, article , config)

        dispatch({
            type: ARTICLE_UPDATE_SUCCESS,
            payload : data
        })
    } catch (error) {
        dispatch({
            type: ARTICLE_UPDATE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

const createArticleReview = (articleId, review) => async (dispatch,getState) =>{
    try {
        dispatch({type: ARTICLE_CREATE_COMMENT_REQUEST})

        const { userLogin: {userInfo}} =getState()

        const config = {
            headers: {
                'content-type': 'application/json',
                Authorization : `Bearer ${userInfo.token}`
            }
        }

        await axios.post(`/api/article/${articleId}/reviews`, review , config)

        dispatch({
            type: ARTICLE_CREATE_COMMENT_SUCCESS
        })
    } catch (error) {
        dispatch({
            type: ARTICLE_CREATE_COMMENT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export { listArticles, listLatestArticles, listTrendingArticles, listArticleDetails, deleteArticle, createAArticle, updateArticle, createArticleReview }
import { TRENDING_ARTICLE_LIST_FAIL, TRENDING_ARTICLE_LIST_REQUEST, TRENDING_ARTICLE_LIST_SUCCESS,  LATEST_ARTICLE_LIST_FAIL, LATEST_ARTICLE_LIST_REQUEST, LATEST_ARTICLE_LIST_SUCCESS, ARTICLE_LIST_REQUEST, ARTICLE_LIST_SUCCESS, ARTICLE_LIST_FAIL, ARTICLE_DETAILS_REQUEST, ARTICLE_DETAILS_SUCCESS, ARTICLE_DETAILS_FAIL } from '../constants/articleConstants'
import axios from 'axios'

const listArticles = () => async (dispatch) =>{
    try {
        dispatch({type: ARTICLE_LIST_REQUEST})

        const { data } = await axios.get('/api/article/all')

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

export { listArticles, listLatestArticles, listTrendingArticles, listArticleDetails }
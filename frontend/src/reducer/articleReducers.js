import { TRENDING_ARTICLE_LIST_FAIL, TRENDING_ARTICLE_LIST_REQUEST, TRENDING_ARTICLE_LIST_SUCCESS,LATEST_ARTICLE_LIST_FAIL, LATEST_ARTICLE_LIST_REQUEST, LATEST_ARTICLE_LIST_SUCCESS, ARTICLE_LIST_REQUEST, ARTICLE_LIST_SUCCESS, ARTICLE_LIST_FAIL, ARTICLE_DETAILS_REQUEST, ARTICLE_DETAILS_SUCCESS, ARTICLE_DETAILS_FAIL} from '../constants/articleConstants'


export const articleListReducer = (state = { articles:[] }, action) => {
    switch(action.type){
        case ARTICLE_LIST_REQUEST: 
            return {
                loading: true,
                articles: []
            }
        case ARTICLE_LIST_SUCCESS:
            return {
                loading: false,
                articles: action.payload

            }
        case ARTICLE_LIST_FAIL:
             return {
                loading: false,
                error: action.payload
    
            }
        default:
            return state
    }
}

export const articleDetailsReducer = (state = { article: { reviews: [] } }, action) => {
    switch(action.type){
        case ARTICLE_DETAILS_REQUEST: 
            return {
                loading: true,
                ...state
            }
        case ARTICLE_DETAILS_SUCCESS:
            return {
                loading: false,
                article: action.payload

            }
        case ARTICLE_DETAILS_FAIL:
             return {
                loading: false,
                error: action.payload
    
            }
        default:
            return state
    }
}


export const trendingArticleListReducer = (state = { trending:[] }, action) => {
    switch(action.type){
        case TRENDING_ARTICLE_LIST_REQUEST: 
            return {
                loading: true,
                trending: []
            }
        case TRENDING_ARTICLE_LIST_SUCCESS:
            return {
                loading: false,
                trending: action.payload

            }
        case TRENDING_ARTICLE_LIST_FAIL:
             return {
                loading: false,
                error: action.payload
    
            }
        default:
            return state
    }
}

export const latestArticleListReducer = (state = { latest:[] }, action) => {
    switch(action.type){
        case LATEST_ARTICLE_LIST_REQUEST: 
            return {
                loading: true,
                latest: []
            }
        case LATEST_ARTICLE_LIST_SUCCESS:
            return {
                loading: false,
                latest: action.payload

            }
        case LATEST_ARTICLE_LIST_FAIL:
             return {
                loading: false,
                error: action.payload
    
            }
        default:
            return state
    }
}


import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'
import { trendingArticleListReducer, latestArticleListReducer, articleListReducer, articleDetailsReducer } from './reducer/articleReducers'

const reducer = combineReducers({
    articleList: articleListReducer,
    trendingArticleList: trendingArticleListReducer,
    latestArticleList: latestArticleListReducer,
    articleDetails: articleDetailsReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
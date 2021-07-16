import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'
import { trendingArticleListReducer, latestArticleListReducer, articleListReducer, articleDetailsReducer } from './reducer/articleReducers'
import { userDetailsReducer, userLoginReducer, userRegisterReducer, userupdateProfileReducer } from './reducer/userReducers.js'

const reducer = combineReducers({
    articleList: articleListReducer,
    trendingArticleList: trendingArticleListReducer,
    latestArticleList: latestArticleListReducer,
    articleDetails: articleDetailsReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userupdateProfileReducer
})

const userInfoFromStorge = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: { userInfo : userInfoFromStorge }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  trendingArticleListReducer,
  latestArticleListReducer,
  articleListReducer,
  articleDetailsReducer,
  articleDeleteReducer,
  articleCreateReducer,
  articleUpdateReducer,
  articleReviewCreateReducer,
} from "./reducer/articleReducers";
import {
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
  userupdateProfileReducer,
  userUpdateReducer,
} from "./reducer/userReducers.js";

const reducer = combineReducers({
  articleList: articleListReducer,
  trendingArticleList: trendingArticleListReducer,
  latestArticleList: latestArticleListReducer,
  articleDetails: articleDetailsReducer,
  articleDelete: articleDeleteReducer,
  createArticle: articleCreateReducer,
  articleCommentCreate: articleReviewCreateReducer,
  articleUpdate: articleUpdateReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userupdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
});

const userInfoFromStorge = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorge },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

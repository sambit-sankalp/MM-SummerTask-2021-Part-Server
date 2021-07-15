import asyncHandler from 'express-async-handler'
import Article from "../models/articlemodel.js"

const getArticles = asyncHandler(async(req, res) => {
    const articles = await Article.find({})
    res.json(articles)
})

const getArticleById = asyncHandler(async(req, res) => {
    const article = await Article.findById(req.params.id)
    article.views++;
    
    if(article) {
        res.json(article)
    } else {
        res.status(404)
        throw new Error("Article not Found")
    }
})

const getLatestArticles= asyncHandler(async(req, res) => {
    const articles = await Article.find().sort({_id : -1}).limit(4)
    
    if(articles) {
        res.json(articles)
    } else {
        res.status(404)
        throw new Error("Articles not Found")
    }
})

const getTrendingArticles= asyncHandler(async(req, res) => {
    const articles = await Article.find().sort({views : -1 , _id : -1}).limit(6)
    
    if(articles) {
        res.json(articles)
    } else {
        res.status(404)
        throw new Error("Article not Found")
    }
})

export {getArticles , getArticleById , getLatestArticles , getTrendingArticles}
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

const deleteArticle = asyncHandler(async(req, res) => {
    const article = await Article.findById(req.params.id)
    
    if(article) {
        await article.remove()
        res.json({message: "Article Deleted"})
    } else {
        res.status(404)
        throw new Error("Article not Found")
    }
})

const createArticle = asyncHandler(async(req, res) => {
    const article = new Article({
        title: 'Demo',
        user: req.user._id,
        imageUrl: '',
        writer: 'Anonymous',
        category: 'Sample',
        views: 0,
        desc: 'Default'
    })
    
    const createdArticle = await article.save()
    res.status(201).json(createdArticle)
})

const updateArticle = asyncHandler(async(req, res) => {
    const { title , imageUrl , writer, category, desc} = req.body

    const article = await Article.findById(req.params.id)

    if (article) {
        article.title = title
        article.writer = writer
        article.imageUrl = imageUrl
        article.category = category
        article.desc = desc

        const updatedArticle = await article.save()
        res.status(201).json(updatedArticle)
    }else{
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

export {getArticles , getArticleById , getLatestArticles , getTrendingArticles, deleteArticle , updateArticle, createArticle}
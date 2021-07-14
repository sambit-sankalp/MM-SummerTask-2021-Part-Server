import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Article from "../models/articlemodel.js"

router.get('/all', asyncHandler(async(req,res)=>{
    const articles = await Article.find({})


    res.json(articles)
}))

router.get('/trending', asyncHandler(async(req,res) => {
    const articles = await Article.find().sort({views : -1 , _id : -1}).limit(6)
    
    if(articles) {
        res.json(articles)
    } else {
        res.status(404)
        throw new Error("Article not Found")
    }

}))

router.get('/latest', asyncHandler(async(req,res) => {
    const articles = await Article.find().sort({_id : -1}).limit(4)
    
    if(articles) {
        res.json(articles)
    } else {
        res.status(404)
        throw new Error("Articles not Found")
    }

}))

router.get('/:category/new', asyncHandler(async(req,res) => {
    const articles = await Article.find({category: `${req.params.category}`}).sort({_id : -1}).limit(3)
    
    if(articles) {
        res.json(articles)
    } else {
        res.status(404)
        throw new Error("Articles not Found")
    }

}))

router.get('/:category/all', asyncHandler(async(req,res) => {
    const articles = await Article.find({category: `${req.params.category}`})
    
    if(articles) {
        res.json(articles)
    } else {
        res.status(404)
        throw new Error("Articles not Found")
    }

}))





router.get('/:id',asyncHandler(async (req,res)=>{
    const article = await Article.findById(req.params.id)
    article.views++;
    
    if(article) {
        res.json(article)
    } else {
        res.status(404)
        throw new Error("Article not Found")
    }

    
}))

export default router
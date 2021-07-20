import asyncHandler from 'express-async-handler'
import Article from "../models/articlemodel.js"

const getArticles = asyncHandler(async(req, res) => {
    const keyword = req.query.keyword ? {
        title: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    }: {}

    const articles = await Article.find({...keyword})
    res.json(articles)
})

const getArticleById = asyncHandler(async(req, res) => {
    const article = await Article.findById(req.params.id)
    article.views++;
    await article.save()
    
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

const createArticleReview = asyncHandler(async(req, res) => {
    const { liked , comment } = req.body

    const article = await Article.findById(req.params.id)

    if (article) {
        const alreadyCommented = article.reviews.find(r => r.user.toString() === req.user._id.toString())

        const alreadyLiked = article.reviews.find(r => r.user.toString() === req.user._id.toString())

        if(alreadyCommented)
        {
            res.status(400)
            throw new Error("Already commented")
        }


        if(alreadyLiked)
        {
            numLike = article.reviews.numLike--
        }
        else{
            numLike = article.reviews.numLike++
        }

        const review = {
            name: req.user.name,
            comment,
            numLike,
            liked
        }

        article.reviews.push(review)

        article.numReviews = article.reviews.length

        await article.save()
        res.status(201).json({message: "Reviewed Successfully"})
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

export {getArticles , getArticleById , getLatestArticles , getTrendingArticles, deleteArticle , updateArticle, createArticle, createArticleReview}
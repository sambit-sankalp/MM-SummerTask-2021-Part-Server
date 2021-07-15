import express from 'express'
const router = express.Router()
import { getArticleById, getArticles, getLatestArticles, getTrendingArticles } from "../controllers/articleControllers.js"

router.route('/all').get(getArticles)

router.route('/trending').get(getTrendingArticles)

router.route('/latest').get(getLatestArticles)

router.route('/:id').get(getArticleById)

export default router
import express from 'express'
const router = express.Router()
import { authUser, getUser, registerUser } from "../controllers/userControllers.js"
import { protect } from "../middleware/authMiddleware.js"

router.post('/', registerUser)
router.post('/signin', authUser)
router.route('/profile').get(protect , getUser)

export default router
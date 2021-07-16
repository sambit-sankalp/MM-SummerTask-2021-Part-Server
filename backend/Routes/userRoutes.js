import express from 'express'
const router = express.Router()
import { authUser, getUser, registerUser, updateUser } from "../controllers/userControllers.js"
import { protect } from "../middleware/authMiddleware.js"

router.post('/', registerUser)
router.post('/signin', authUser)
router.route('/profile').get(protect , getUser).put(protect, updateUser)

export default router
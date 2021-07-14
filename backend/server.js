import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import articles from './data/articles.js'
import articleRoutes from './Routes/articleRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'


dotenv.config()

connectDB()

const app = express()



app.get('/', (req,res)=>{
    res.send("API is running...")
})

app.use('/api/article',articleRoutes)

app.use(notFound)

app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`))
import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import articleRoutes from './Routes/articleRoutes.js'
import userRoutes from './Routes/userRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import uploadRoutes from './Routes/uploadRoutes.js'


dotenv.config()

connectDB()

app.use(express.json())

const app = express()



app.get('/', (req,res)=>{
    res.send("API is running...")
})

app.use('/api/article',articleRoutes)
app.use('/api/user',userRoutes)
app.use('/api/upload',uploadRoutes)

const __dirname  = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use(notFound)

app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`))
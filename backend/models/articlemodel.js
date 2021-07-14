import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "Anonymous"
    },
    like: {
        type: Number,
        required: true,
        default: 0
    },
    dislike: {
        type: Number,
        required: true,
        default: 0
    },
    comment: {
        type: String,
        required: true
    },
    
},{
    timestamps: true
})

const articleSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    category: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        default: ""
    },
    title: {
        type: String,
        required: true
    },
    writer: {
        type: String,
        required: true,
        default: "Anonymous"
    },
    desc: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        required: true,
        default: 0
    },
    reviews: [reviewSchema],
},{
    timestamps: true
})

const Article = mongoose.model('Article', articleSchema)

export default Article
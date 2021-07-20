import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "Anonymous"
    },
    comment: {
        type: String,
        required: true
    },
    numLike: {
        type: Number,
        required: true,
        default: 0
    },
    liked: {
        type: Boolean,
        required: true,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    
},{
    timestamps: true
})

const likeSchema = mongoose.Schema({
   
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
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
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    likes: [likeSchema],
    reviews: [reviewSchema],
},{
    timestamps: true
})

const Article = mongoose.model('Article', articleSchema)

export default Article
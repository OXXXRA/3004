const {Schema, model} = require('mongoose')

const ArticleSchema = new Schema(
    {
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const Article = model('Article', ArticleSchema)

module.exports = Article
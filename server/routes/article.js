const Article = require('../models/article')
const {Router} = require('express')

router = Router()

router.get('/', async (req, res) => {
    try{
        const ArticleList = await Article.find()
        if(!ArticleList) throw new Error('Something going wrong')
        res.status(200).json(ArticleList)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

router.post('/', async (req, res) => {
    const newArticle = Article(req.body)
    try {
        const response = await newArticle.save()
        if(!response) throw new Error('Something going wrong')
        res.status(200).json(response)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

router.get('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const article = await Article.findById(id, (err, result) => {
            if (err) throw err
            return result
        })
        if(!article) throw new Error('Something going wrong')
        res.status(200).json(article)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

router.put('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const response = await Article.findByIdAndUpdate(id, req.body)
        if(!response) throw new Error('Something going wrong')
        res.status(200).json(response)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const response = await Article.findByIdAndDelete(id)
        if(!response) throw new Error('Something going wrong')
        res.status(200).json(response)
    } catch (err){
        res.status(500).json({message: err.message})
    }
})


module.exports = router
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const {URI, PORT} = require('../config')
const routerArticle = require('./routes/article') /* Подключение Роутера */
const app = express()

app.use(cors())
app.use(bodyParser.json())


mongoose.connect(URI, {
        userNewUrlParser: true,
        userCreateIndex: true,
        userUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => console.log('DB connect'))
    .catch((err) => console.log(err))
app.use('/articles', routerArticle)


app.get('/', (req, res) => res.send('222'))

app.listen(PORT, () => console.log('Server start'))
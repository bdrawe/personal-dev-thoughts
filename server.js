const express = require('express');
const app = express();
const articleRouter = require('./routes/articles')

app.set('view engine', 'ejs')
app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    const articles = [{
        title: "Testing123",
        createdAt: Date.now(),
        description: "Test Description"
    },
    {
        title: "New Blog Post",
        createdAt: Date.now(),
        description: "Test Description Again"
    }
    ]
    res.render('index', {articles: articles})
})

app.listen(5000)
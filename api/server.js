const express = require('express')

const RecipesRouter = require('../recipes/recipes-router')

const server = express()

server.use(express.json())
server.use('/recipes', RecipesRouter)


server.get('/', (req, res) => {
    res.send('Sanity Check')
})


module.exports= server
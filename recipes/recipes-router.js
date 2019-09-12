const express = require('express')

const Recipes = require('./recipes-model')

const router = express.Router()

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: "Could not load recipes" })
        })
})

module.exports = router
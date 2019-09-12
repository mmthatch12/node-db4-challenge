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

router.get('/:id/ingredients', (req, res) => {
    const { id } = req.params

    Recipes.getShoppingList(id)
        .then(recipe => {
            if(recipe){
                res.status(200).json(recipe)
            } else {
                res.status(400).json({ message: 'Recipe Id does not exist'})
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: 'Could not load recipe'})
        })
})

router.get('/:id/steps', (req, res) => {
    const { id } = req.params

    Recipes.getInstructions(id)
        .then(recipe => {
            if(recipe){
                res.status(200).json(recipe)
            } else {
                res.status(400).json({ message: 'Recipe Id does not exist'})
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: 'Could not load recipe'})
        })
})

router.get('/:id/ri', (req, res) => {
    const { id } = req.params

    Recipes.getSingleIngred(id)
        .then(ing => {
            if(ing){
                res.status(200).json(ing)
            } else {
                res.status(400).json({ message: 'Recipe Id does not exist'})
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: 'Could not load recipe'})
        })
})



module.exports = router
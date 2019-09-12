const db = require('../data/db-config')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    //should return a list of all recipes in the database.
    return db('recipes')
        .then(recipes => {
            return recipes
        })
}

function getShoppingList(id) {
    //should return a list of all ingredients and quantities for a given recipe
    return db('recipe_ingredients').where({ recipe_id: id}).first()
        .then(recipe => {
            if(recipe){
                return recipe
            } else {
                return null
            }
        })    
}

function getInstructions(id) {
    //should return a list of step by step instructions for preparing a recipe
}
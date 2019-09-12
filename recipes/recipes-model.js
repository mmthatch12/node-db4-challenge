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
}

function getInstructions(id) {
    //should return a list of step by step instructions for preparing a recipe
}